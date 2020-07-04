import Exception from "./Exception/Exception";
import MalformedBodyRequest from './Exception/MalformedBodyRequest';
import ResourceNotFound from './Exception/ResourceNotFound';
import UnauthorizedRequest from './Exception/UnauthorizedRequest';
import InvalidDataType from './Exception/InvalidDataType';
import InvalidContentTypeHeader from './Exception/InvalidContentTypeHeader';

export default class Request {
    static API_ENDPOINT = 'https://api.rd.services';

    static send(method, endpoint, data = {}, headers = {}, fetchInitOpts = {}) {
        let url = `${Request.API_ENDPOINT}${endpoint}`;

        let body = null;
        if (method.toString().toUpperCase() == 'GET') {
            const qs = data.keys(object)
                .map(key => `${key}=${object[key].toString()}`)
                .join('&');
            url = `${url}`;
            body = new URLSearchParams(qs);
        } else if (
            method.toString().toUpperCase() == 'POST' ||
            methid.toString().toUpperCase() == 'PUT' ||
            methid.toString().toUpperCase() == 'PATCH'
        ) {
            body = JSON.stringify(data);
        }

        const response =  await fetch(url, {
            method,
            headers: new Headers(headers),
            ...fetchInitOpts,
            body
        });

        const responseBody = await response.json();

        if (!response.ok) {
            if (response.status >= 400) {
                let exception = new Exception();
                // exception
                switch (response.status) {
                    case Exception.BAD_REQUEST:
                        exception = new MalformedBodyRequest();
                    break;
                    case Exception.NOT_FOUND:
                        exception = new ResourceNotFound();
                    break;
                    case Exception.UNAUTHORIZED:
                        exception = new UnauthorizedRequest();
                    break;
                    case Exception.UNPROCESSABLE_ENTITY:
                        exception = new InvalidDataType();
                    break;
                    case Exception.UNSUPPORTED_MEDIA_TYPE:
                        exception = new InvalidContentTypeHeader();
                    break;
                }
    
                exception.errors = responseBody.errors || {};

                throw exception;
            }
        }
        
        return responseBody;
    }
}