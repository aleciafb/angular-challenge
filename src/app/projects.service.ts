import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class ProjectsService {

  public baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://projectservice.staging.tangentmicroservices.com/api/v1';
  }

  getOptions() {
    let headers = new Headers({ 'Authorization': JSON.parse(localStorage.getItem('currentUser')).token });
    return new RequestOptions({ headers: headers });
  }

  getProducts() {
    let url =  `${this.baseUrl}/projects/`;

    return this.http.get(url, this.getOptions())
                    .map(this.extractData)
  }

  getProduct(productId) {
    let url =  `${this.baseUrl}/projects/${productId}/`;

    return this.http.get(url, this.getOptions())
                    .map(this.extractData)

  }

  newProduct(model) {
    let url =  `${this.baseUrl}/projects/`;
    let body = model;

    return this.http.post(url, body , this.getOptions())
      .map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }
}
