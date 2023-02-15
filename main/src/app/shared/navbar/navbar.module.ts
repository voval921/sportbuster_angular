import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {DynamicComponent, NavbarComponent} from './navbar.component';
import { MatButtonModule } from '@angular/material';
import { SigninModule } from "../signin/signin.module";
import {SignindialogComponent} from "../signin/signindialog/signindialog.component";
import {SigninformComponent} from "../signin/signinform/signinform.component";
import {SignupformComponent} from "../signin/signupform/signupform.component";
import {LanguageComponent} from "../language/language.component";
import {LanguageModule} from "../language/language.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [ RouterModule, CommonModule, TranslateModule, MatButtonModule, SigninModule, LanguageModule ],
    declarations: [ NavbarComponent, DynamicComponent],
    exports: [ NavbarComponent, DynamicComponent],
    entryComponents: [DynamicComponent, LanguageComponent ],
})

export class NavbarModule {}
