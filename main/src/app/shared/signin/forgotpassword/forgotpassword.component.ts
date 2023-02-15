import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninService } from '../../_service/signin/signin.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotForm: FormGroup;
  email: string;
  data = {
    'status': true,
    'message': "success",
  }

  constructor(
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private dialog: MatDialog,
  ) {
    this.forgotForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {
  }

  reset() {
    if (this.forgotForm.valid) {
      this.email = this.forgotForm.get('Email').value;
      this.signinService.recover(this.email).subscribe(response => {
        this.dialog.closeAll();
        localStorage.setItem('forgorPass', 'closed');
        this.data = {
          message: 'Success',
          status: true
        }
        this.openConfirm();
      }, error => {
        this.dialog.closeAll();
        localStorage.setItem('forgorPass', 'closed');
        this.data = {
          message: 'Failed',
          status: false
        }
        this.openConfirm();
      });
    }
  }

  openConfirm() {
    this.dialog.open(ConfirmComponent, {
      panelClass: 'custom-dialog-container',
      width: '300px',
      height: '300px',
      data: this.data
    });
  }

  get formValid() {
    return this.forgotForm.controls;
  }

}
