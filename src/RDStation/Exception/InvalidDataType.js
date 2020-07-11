import Exception from "./Exception";

export default class InvalidDataType extends Exception {
    get code() {
        return Exception.UNPROCESSABLE_ENTITY;
    }
}