import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AllGenresService {

    constructor(private http: Http) { }
    
  getAllGenres(url): Observable<any>{
      return this.http.get(url).map(
      response =>{
          return response.json();          
      });
  }
}