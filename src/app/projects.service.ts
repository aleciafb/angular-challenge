import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class ProjectsService {

  constructor(private http: Http) {}

  getProducts() {
    let url = 'http://projectservice.staging.tangentmicroservices.com/api/v1/projects/'
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('currentUser')).token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
                    .map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }
}
