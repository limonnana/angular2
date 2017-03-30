import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService01 {

    private _url: string = "http://localhost:8085/paygilantAdmin02/login";  
    private testResponse:Response;

    constructor(private _http: Http) {} // Injecting the Http Service
  

    sendData(data: any): Observable<Object> {

      //  let encoded_data = JSON.stringify({ data });
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers, method: "post"});
        let body = this._http.post(this._url ,data, options).map((res: Response) => res || {});
        this._http.post(this._url ,data, options).subscribe(
            data => {
                      this.testResponse = data ;
                      console.log("I SEE DATA HERE: ", this.testResponse.text());
                     }
        );
           return body;
}
}