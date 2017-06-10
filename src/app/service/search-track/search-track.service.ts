import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchTrackService {

    constructor(private http: Http) { }
    
    SearchAllTrack(track): Observable<any>{
        return this.http.get('http://104.197.128.152:8000/v1/tracks?title=' + track).map(
        response =>{
            return response.json();
        });
    }

}
