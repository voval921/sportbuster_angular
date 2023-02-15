import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { getTranslation } from "./translate.stub";
import { of } from "rxjs";

export class TranslationLoader implements TranslateLoader {
  constructor(private http: HttpClient) {
  }

  getTranslation(lang: string): Observable<any> {
    if (sessionStorage.getItem('env') === 'LOCAL') {
      return this.getTranslationsStub();
    }
    else {
      return this.http.get("/api/getTranslation/" + lang);
    }
  }

  getTranslationsStub() {
    return of(getTranslation);
  }
}
