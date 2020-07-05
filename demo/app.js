const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const sessionStorage = require('sessionstorage');
const { default: Authentication } = require('rdstation/index');

/**
 * Configs
 */
// static assets
app.use(express.static(__dirname + '/assets'));
// template engine
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

/**
 * Your RDStation config - could be on ENV vars
 */
const CLIENT_ID = 'd8a15079-1946-46ec-9d50-1fdb76934c0a';
const CLIENT_SECRET = 'b4cbdf2a63204524bc2b33b79247a2c7';
const REDIRECT_URL = 'http://localhost:3000/auth';

/**
 * Routes
 */

app.get('/', (req, res) => {
    const authCode = sessionStorage.getItem('rdstation_auth_code');
    let authentication = null;
    let accessToken = null;

    if (authCode) {
        authentication = new Authentication(CLIENT_ID, CLIENT_SECRET);
        accessToken = authentication.getAccessToken(authCode);
    }

    res.render('index.html', {
        clientId: CLIENT_ID,
        redirectUrl: REDIRECT_URL,
        authCode,
        accessToken
    });
});

/**
 * RDStation App Callback returned from auth flow
 */
app.get('/auth', (req, res) => {
    const code = req.query.code;
    sessionStorage.setItem('rdstation_auth_code', code);
    res.redirect('/');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
