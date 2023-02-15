import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
})
export class LanguageComponent implements OnInit {

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  useLanguage(language:string) {
    this.translate.use(language);
    console.log(this.translate.use(language));
    sessionStorage.setItem("language",language);
  }

  getLanguageFlag(): string {
    return this.translate.currentLang;
  }

}
