import Exception from "./Exception";

export default class ResourceNotFound extends Exception {
    get code() {
        return Exception.NOT_FOUND;
    }
}