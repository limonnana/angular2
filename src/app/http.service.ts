import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

    private _url: string = "http://localhost:8085/paygilantAdmin02/login";  

    constructor(private _http: Http) {} // Injecting the Http Service

    sendData(data: any): Observable<Object> {

      //  let encoded_data = JSON.stringify({ data });
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers, method: "post"});

        return this._http.post(this._url ,data, options).map(
            (res: Response) => res || {}
        );

}
}