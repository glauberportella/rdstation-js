import Exception from "./Exception";

export default class InvalidContentTypeHeader extends Exception {
    get code() {
        return Exception.UNSUPPORTED_MEDIA_TYPE;
    }
}