import AccessToken from "./AccessToken";
import Request from "./Request";

export default class Authentication {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    getAccessToken(code) {
        const response = Request.send('POST', '/auth/token', {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            code: code
        });

        if (!response) {
            throw new Error('Authentication::getAccessToken(): Request failed on response.');
        }

        return new AccessToken(this, response['access_token'], response['expires_in'], esponse['refresh_token']);
    }

    refreshAccessToken(refreshToken) {
        const fields = {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            refresh_token: refreshToken
        };

        const response = Request.send('POST', '/auth/token', fields, {
            'Content-Type': 'application/json'
        });

        if (!response) {
            throw new Error('Could not refresh access token.');
        }

        return new AccessToken(this, response['access_token'], response['expires_in'], response['refresh_token']);
    }

    get clientId() {
        return this.clientId;
    }

    set clientId(val) {
        this.clientId = val;
    }

    get clientSecret() {
        return this.clientSecret;
    }

    set clientSecret(val) {
        this.clientSecret = val;
    }
}