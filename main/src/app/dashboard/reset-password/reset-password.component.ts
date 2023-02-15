import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../../shared/MustMatch";
import {SigninService} from "../../shared/_service/signin/signin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private password: string;
  private username: string;
  profileForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private signinService: SigninService,
              private router: Router) {
    this.profileForm = this.formbuilder.group({
      Password: ['', [Validators.required, Validators.pattern('(?!^[0-9]*$)(?=.*[A-Z])(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,30})$')]],
      ConfirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('Password', 'ConfirmPassword'),
    });
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('usernameToChangePassword');
  }

  get getFormControl() {
    return this.profileForm.controls;
  }

  reset() {
    this.username = sessionStorage.getItem('usernameToChangePassword');
    this.password = this.profileForm.get('Password').value;
    this.signinService.resetPassword(this.password, this.username).subscribe(response => {
        sessionStorage.removeItem('usernameToChangePassword');
        setTimeout(() => {
          this.router.navigate(['dashboard']);
        }, 2000);
      },
      error => {
        console.log(error);
      });
  }

  gotodashboard() {
    this.router.navigateByUrl('/dashboard');
  }

}
