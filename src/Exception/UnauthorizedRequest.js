import Exception from "./Exception";

export default class UnauthorizedRequest extends Exception
{
    get code() {
        return Exception.UNAUTHORIZED;
    }
}