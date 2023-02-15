import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LanguageComponent} from "./language.component";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [LanguageComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [LanguageComponent]
})
export class LanguageModule { }
