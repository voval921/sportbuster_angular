import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {TranslateService} from "@ngx-translate/core";
import {SigninService} from "./shared/_service/signin/signin.service";

@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  private _router: Subscription;
  private lang: string;
  public loading = true;

  constructor( private router: Router, private translate: TranslateService, private signinService: SigninService ) {
    this.lang = 'it';
    if(sessionStorage.getItem('language')){
      this.lang = sessionStorage.getItem('language');
    }
    translate.setDefaultLang(this.lang);
    translate.currentLang = this.lang;
    sessionStorage.setItem("language",this.lang);

    //local
    // sessionStorage.setItem("env", "LOCAL");
    sessionStorage.setItem("env", "DEVELOPMENT");
  }

    ngOnInit() {
      this.loading = true;
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        const body = document.getElementsByTagName('body')[0];
        const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
        if (body.classList.contains('modal-open')) {
          body.classList.remove('modal-open');
          modalBackdrop.remove();
        }
        this.signinService.updateLoggedUser();
        this.loading = false;
      });
    }
}
