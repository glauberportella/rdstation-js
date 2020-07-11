import Exception from './Exception/Exception';
import Request from './Request';

export default class ApiResource {
    /**
     * Constructor
     *
     * @param {AccessToken} $accessToken
     */
    constructor($accessToken) {
        this.accessToken = $accessToken;
    }

    /**
     * @return {AccessToken}
     */
    get accessToken() {
        return this.accessToken;
    }

    /**
     * @param {AccessToken} val
     */
    set accessToken(val) {
        this.accessToken = val;
    }

    /**
     *
     * @param {string} method
     * @param {string} endpoint
     * @param {Object} data
     * @param {Object} headers
     * @param {Object} fetchInitOpts
     */
    request(method, endpoint, data = {}, headers = {}, fetchInitOpts = {}) {
        try {
            response = Request.send(method, endpoint, data, Object.assign({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.accessToken.getToken()}`
            }, headers), fetchInitOpts);
        } catch (e) {
            // invalid access token? refresh and try again
            if (e.hasErrorType(Exception.TYPE_UNAUTHORIZED)) {
                this.accessToken.refresh();
                response = Request.send(method, endpoint, data, Object.assign({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.accessToken.getToken()}`
                }, headers), fetchInitOpts);
            } else {
                throw $e;
            }
        }

        return response;
    }
}
