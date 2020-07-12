const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const { Authentication } = require('rdstation/lib/index');

/**
 * Configs
 */

// Template engine
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

/**
 * Your RDStation App config - could be on ENV vars, on a DB, etc.
 */
const CLIENT_ID = 'd8a15079-1946-46ec-9d50-1fdb76934c0a';
const CLIENT_SECRET = 'b4cbdf2a63204524bc2b33b79247a2c7';
const REDIRECT_URL = 'http://localhost:3000/auth';


/**
 * Globals only for demo
 */
let authCode, accessToken, authentication;
let contacts, funnels;

/**
 * Routes
 */

app.get('/', (req, res) => {
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
    authCode = req.query.code;
    res.redirect('/');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
