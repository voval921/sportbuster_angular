import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  private headers = new HttpHeaders();


  constructor(private http: HttpClient) { }

  setAthlete(athlete) {
    return this.http.post('/api/setAthlete', athlete,{headers: this.headers}).pipe(map(response => {
      return response;
    }));
  }

  getAthlete(): Observable<Object> {
    return this.http.get('/api/getMatch',
      {
        headers: this.headers,
      }
    );
  }

}
