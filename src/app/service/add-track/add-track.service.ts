import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AddTrackService {

    constructor(private http: Http) { }
  getAllGenres(): Observable<any>{
      return this.http.get('http://104.197.128.152:8000/v1/genres').map(
      response =>{
          return response.json();
      }
      );
  }
  saveData(data): Observable<any>{
      let body = JSON.stringify(data);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://104.197.128.152:8000/v1/tracks', body, options).map(
      response =>{
          return response;
      }
      )
  }

}
