export default class Exception extends Error
{
    static BAD_REQUEST = 400;
    static UNAUTHORIZED = 401;
    static NOT_FOUND = 404;
    static UNSUPPORTED_MEDIA_TYPE = 415;
    static UNPROCESSABLE_ENTITY = 422;

    static TYPE_BAD_REQUEST = 'BAD_REQUEST';
    static TYPE_UNAUTHORIZED = 'UNAUTHORIZED';
    static TYPE_ACCESS_DENIED = 'ACCESS_DENIED';
    static TYPE_EXPIRED_CODE_GRANT = 'EXPIRED_CODE_GRANT';
    static TYPE_RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND';
    static TYPE_UNSUPPORTED_MEDIA_TYPE = 'UNSUPPORTED_MEDIA_TYPE';
    static TYPE_CANNOT_BE_NULL = 'CANNOT_BE_NULL';
    static TYPE_INVALID_FORMAT = 'INVALID_FORMAT';
    static TYPE_CANNOT_BE_BLANK = 'CANNOT_BE_BLANK';
    static TYPE_VALUES_MUST_BE_LOWERCASE = 'VALUES_MUST_BE_LOWERCASE';
    static TYPE_MUST_BE_STRING = 'MUST_BE_STRING';
    static TYPE_INVALID_FIELDS = 'INVALID_FIELDS';
    static TYPE_CONFLICTING_FIELD = 'CONFLICTING_FIELD';
    static TYPE_EMAIL_ALREADY_IN_USE = 'EMAIL_ALREADY_IN_USE';
    static TYPE_INVALID = 'INVALID';
    static TYPE_TAKEN = 'TAKEN';
    static TYPE_TOO_SHORT = 'TOO_SHORT';
    static TYPE_TOO_LONG = 'TOO_LONG';
    static TYPE_EXCLUSION = 'EXCLUSION';
    static TYPE_INCLUSION = 'INCLUSION';

    constructor(message) {
        super(message);
        this.errors = [];
    }

    hasErrorType(type) {
        for (let k in this.errors) {
            if (k == 'error_type' && this.errors[k] == type) {
                return true;
            }
            for (let kk in this.errors[k]) {
                if (kk == 'error_type' && this.errors[k][kk] == type) {
                    return true;
                }
            }
        }

        return false;
    }

    get errors() {
        return this.errors;
    }

    set errors(val) {
        this.errors = val;
    }

    get code() {
        return this.BAD_REQUEST;
    }
}