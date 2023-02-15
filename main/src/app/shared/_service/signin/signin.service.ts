import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private user: any;
  loggedUser: Object;
  private headers = new HttpHeaders();

  @Output() change: EventEmitter<Object> = new EventEmitter();
  // storage: any;

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  login(credentials) {
    const headersCred = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {})
      .append("Content-Type", 'application/x-www-form-urlencoded;charset=UTF-8');

    //let body = 'username=${username}&password=${password}';
    let body = new URLSearchParams();
    body.set('username', credentials.username);
    body.set('password', credentials.password);

    return this.http.post('/login', body.toString(), { headers: headersCred }).pipe(map(user => {
      return user;
    }));
  }

  signup(credentials) {
    const headers = new HttpHeaders();
    let reqParam = {
      "username": credentials.username,
      "firstName": credentials.firstName,
      "lastName": credentials.lastName,
      "password": credentials.password,
      "email": credentials.email,
      "gender": credentials.gender,
      "birthDate": credentials.birthDate,
      "country": {
        "codice": credentials.country
      },
      "birthPlace": {
        "localita": credentials.birthPlace
      },
      "contacts": [
        {
          "type": "MOBILE",
          "number": credentials.phoneNumber
        }
      ]
    }
    return this.http.post('/api/registerUser', reqParam, { headers: headers }).pipe(map(user => {
      return user;
    }));
  }

  updateUser(credentials) {
    let reqParam = {
      "id": credentials.id,
      "username": credentials.username,
      "firstName": credentials.firstName,
      "lastName": credentials.lastName,
      "password": credentials.password,
      "email": credentials.email,
      "gender": credentials.gender,
      "birthDate": credentials.birthDate,
      "country": {
        "codice": credentials.country
      },
      "birthPlace": {
        "localita": credentials.birthPlace
      },
      "contacts": [
        {
          "type": "MOBILE",
          "number": credentials.phoneNumber
        }
      ]
    }
    return this.http.post('/api/updateUser', reqParam).pipe(map(user => {
      return user;
    }));
  }
  customizeData(credentials) {
    let reqParam = {
      "activeSport": credentials.customizeSport,
      "activeNews": credentials.customizeNews,
    }
    return this.http.post('/api/customizeData', reqParam).pipe(map(user => {
      return user;
    }));
  }


  confirmRegister(token) {
    return this.http.get('/api/confirm?token=' + token).pipe(map(user => {
      return user;
    }))
  }

  changePassword(token) {
    return this.http.get('/api/change_password?token=' + token).pipe(map(user => {
      return user;
    }))
  }

  resetPassword(password, username) {
    return this.http.get('/api/reset_password',
      {
        headers: this.headers,
        params: {
          'password': password,
          'username': username
        }
      }
    );
  }

  recover(email) {
    return this.http.get('/api/recover_password?email=' + email).pipe(map(email => {
      return email;
    }))
  }

  getLoggedUser(): Observable<any> {
    return this.user = this.http.get('/api/logged_user');
  }

  updateLoggedUser(): void {
    this.getLoggedUser().subscribe(data => {
      sessionStorage.setItem('loggedUser', JSON.stringify(data));
      this.loggedUser = data;
      let username = 'username';
      if (!this.loggedUser[username]) {
        this.loggedUser = null;
      }
      this.change.emit(this.loggedUser);
    })
  }

  logout() {
    let body = new URLSearchParams();
    return this.http.post('/logout', body.toString()).subscribe(response => {
      this.updateLoggedUser();
      return response;
    });
  }

  getUserCustomization(): Observable<any> {
    return this.http.get('/api/getUserCustomization');
  }

  activeCustomization(customization, value) {
    return this.http.get('/api/activeCustomization',
      {
        headers: this.headers,
        params: {
          'customization': customization,
          'value': value
        }
      }
    );
  }

  unactiveCustomization(customization, value) {
    return this.http.get('/api/unactiveCustomization',
      {
        headers: this.headers,
        params: {
          'customization': customization,
          'value': value
        }
      }
    );
  }

}
