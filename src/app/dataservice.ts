import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as H from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

    constructor(private http: H.Http) {
    }

    getHeader() {
        return new H.Headers({
            'Content-Type': 'application/json',

        });
    }


    public extractMultipleData(res: H.Response) {
        if (res.status < 200 || res.status >= 300) {
            return;
        }
        let body = res.json();
        return body || [];
    }
    private handleError(error: any) {
        return Observable.throw(JSON.parse(error.text()).message);
    }



    getObject(url: string, params?: H.URLSearchParams): Observable<Object> {
        if (url !== '' && url != null) {
            alert('url  .... '+url)
            let headers = this.getHeader();
            let options = new H.RequestOptions({ headers: headers, search: params });
            return this.http.get(url, options).map((res) => this.extractMultipleData(res)).catch((res) => this.handleError(res));
        } else {
            let errorMessage = 'Url should not be null or empty';

            return Observable.throw(errorMessage);
        }
    }


}