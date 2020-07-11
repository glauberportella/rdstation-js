import Exception from "./Exception";

export default class MalformedBodyRequest extends Exception {
    get code() {
        return Exception.BAD_REQUEST;
    }
}