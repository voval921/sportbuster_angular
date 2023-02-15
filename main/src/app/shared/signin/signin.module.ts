import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SignindialogComponent } from './signindialog/signindialog.component';
import {
  MatCardModule,
  MatDialogModule, MatError,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule
} from "@angular/material";
import { SignupformComponent } from './signupform/signupform.component';
import { SigninformComponent } from './signinform/signinform.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TestService } from "../_service/test/test.service";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { UserboxComponent } from './userbox/userbox.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogoutconfirmComponent } from './logoutconfirm/logoutconfirm.component';
import { NgxLoadingModule } from 'ngx-loading';
import { SportModule } from '../sport/sport.module';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmComponent } from '../confirm/confirm.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatInputModule,
    SportModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'XSRF-TOKEN' }),
    RouterModule,
    TranslateModule,
  ],
  declarations: [
    SignindialogComponent,
    SignupformComponent,
    SigninformComponent,
    UserboxComponent,
    ForgotpasswordComponent,
    LogoutconfirmComponent,
  ],
  providers: [
    TestService
  ],
  exports: [UserboxComponent, SignindialogComponent],
  entryComponents: [
    ConfirmComponent,
    SigninformComponent,
    SignupformComponent,
    LogoutconfirmComponent,
    SignindialogComponent,
    UserboxComponent,
    ForgotpasswordComponent,
  ]
})

export class SigninModule { }
