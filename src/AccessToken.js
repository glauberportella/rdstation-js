export default class AccessToken {
    constructor(auth = null, token = null, expiresIn = null, refreshToken = null) {
        this.auth = auth;
        this.token = token;
        this.expiresIn = expiresIn;
        this.refreshToken = refreshToken;
    }

    refresh() {
        if (!this.auth) {
            throw new Error('No authentication exists on AccessToken. Try setting it calling the method AccessToken::setAuth(Authentication $auth).');
        }

        this.auth.refreshAccessToken(this.refreshToken);
    }

    get auth() {
        return this.auth;
    }

    set auth(val) {
        this.auth = val;
    }

    get token() {
        return this.token;
    }

    set token(val) {
        this.token = val;
    }

    get expiresIn() {
        return this.expiresIn;
    }

    set expiresIn(val) {
        this.expiresIn = val;
    }

    get refreshToken() {
        return this.refreshToken;
    }

    set refreshToken(val) {
        this.refreshToken;
    }
}