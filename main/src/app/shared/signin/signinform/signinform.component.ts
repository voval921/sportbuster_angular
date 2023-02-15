import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Http } from "@angular/http";
import { TestService } from "../../_service/test/test.service";
import { SigninService } from "../../_service/signin/signin.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignindialogComponent } from "../signindialog/signindialog.component";
import { MatDialog } from '@angular/material';
import { SignupformComponent } from '../signupform/signupform.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { ConfirmComponent } from '../../confirm/confirm.component';

@Component({
  selector: 'app-signinform',
  styleUrls: ['./signinform.component.css'],
  templateUrl: './signinform.component.html',
})
export class SigninformComponent implements OnInit {

  //sports: Array<any>;
  credentials = { username: '', password: '' };
  public loading = false;
  failed_login: string;
  @Output('loginState') loginState = new EventEmitter<string>();
  error = '';

  visView: string = '';

  signForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private testService: TestService,
    private signinService: SigninService,
    private signinDialog: SignindialogComponent,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) {
    this.signForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login(): any {
    if (this.signForm.valid) {
      this.loading = true;
      this.credentials.username = this.signForm.get('Username').value;
      this.credentials.password = this.signForm.get('Password').value;
      this.signinService.login(this.credentials).subscribe(response => {
        sessionStorage.setItem(
          'token',
          btoa(this.credentials.username + ':' + this.credentials.password)
        );
        this.signinService.updateLoggedUser();
        this.signinDialog.onNoClick();
      }, error => {
        this.failed_login = "isfailed";
        this.loginState.emit(this.failed_login);
        this.loading = false;
      });
    }
  }

  goToSingUp() {
    this.dialog.closeAll();
    localStorage.setItem('forgorPass', '');
    let dialogRef = this.dialog.open(SignindialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '380px',
      height: '620px',
      data: { component: SignupformComponent }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (localStorage.getItem('forgorPass') !== 'closed') {
        this.dialog.open(SignindialogComponent, {
          panelClass: 'custom-dialog-container',
          width: '380px',
          height: '530px',
          data: { component: SigninformComponent }
        });
      }    
    })
  }

  gotoForgot() {
    this.dialog.closeAll();
    localStorage.setItem('forgorPass', '');
    let dialogRef = this.dialog.open(SignindialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '380px',
      height: '420px',
      data: { component: ForgotpasswordComponent }
    });

    dialogRef.afterClosed().subscribe(result => { 
      if (localStorage.getItem('forgorPass') !== 'closed') {
        this.dialog.open(SignindialogComponent, {
          panelClass: 'custom-dialog-container',
          width: '380px',
          height: '530px',
          data: { component: SigninformComponent }
        });
      }
    })
  }


}
