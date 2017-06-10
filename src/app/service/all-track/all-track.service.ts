import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AllTrackService {

    constructor(private http: Http) { }
    
    getAllTrack(url): Observable<any>{
        return this.http.get(url).map(
            response =>{
                const data = response.json();
                return data;            
        });
    }

}
