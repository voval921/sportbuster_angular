import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Sport} from "../../../match/match.component";

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  getTournaments(sport: string, limitDate: string): Observable<Object> {
    return this.http.get('/api/getTournaments',
      {
        headers: this.headers,
        params: {
          'sport': sport,
          'limitDate': limitDate
        }
      }
    );
  }

  getCompetitions(sport: Sport): Observable<Object> {
    return this.http.get('/api/getCompetitions',
      {
        headers: this.headers,
        params: {
          'sport': sport.sport,
        }
      }
    );
  }

  getLastTournament(sport: string): Observable<Object> {

    return this.http.get('/api/resultsLastTournament',
      {
        headers: this.headers,
        params: {
          'sport': sport
        }
      }
    );
  }

}
