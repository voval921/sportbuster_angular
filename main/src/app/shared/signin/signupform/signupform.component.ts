import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigninService } from '../../_service/signin/signin.service';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { MustMatch } from '../../MustMatch';
import { MatDialog } from '@angular/material';
import moment from 'moment';


@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  signForm1: FormGroup;
  signForm2: FormGroup;
  formstate: string = 'form1';
  data = {
    status: true,
    message: "Success"
  }
  registerData = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    gender: '',
    bithDate: '',
    birthPlace: '',
    phoneNumber: '',
  }
  private selectedCountry: string;
  country: string;

  constructor(
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private dialog: MatDialog,
  ) {
    this.signForm1 = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', [Validators.required, Validators.pattern('(?^[0-9]*$)(?=.*[A-Z])(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,30})$')]],
      //Password: ['', [Validators.required, Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))]],
      ConfirmPassword: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
    }, {
      validator: MustMatch('Password', 'ConfirmPassword'),
    });
    this.signForm2 = this.formBuilder.group({
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Phonenumber: [''],
      Birthday: ['', Validators.required],
      Birthplace: [''],
      Gender: ['', Validators.required]
    });

    // this.signForm1.get('Password').setValue('qweqweQ1');
    // this.signForm1.get('ConfirmPassword').setValue('qweqweQ1');
  }

  ngOnInit() {

  }
  // changeBithday() {
  //   let date = this.signForm2.get('Birthday').value;

  //   console.log(date);
  //   let currentDate = new Date(date);
  //   console.log(currentDate);
  //   // it is a date
  //   if (currentDate.toString() == 'Invalid Date') {  // d.valueOf() could also work
  //     // date is not valid
  //     return false;
  //   } else {
  //     // date is valid
  //     return true;
  //   }
  // }

  getErrorMessage(pickerInput: string): string {
    if (!pickerInput || pickerInput === '') {
      return 'Please choose a date.';
    }
    return this.isMyDateFormat(pickerInput);
  }
  isMyDateFormat(date: string): string {
    if (date.length !== 10) {
      return 'Invalid input: Please input a string in the form of YYYY-MM-DD';
    } else {
      const da = date.split('-');
      if (da.length !== 3 || da[0].length !== 4 || da[1].length !== 2 || da[2].length !== 2) {
        return 'Invalid input: Please input a string in the form of YYYY-MM-DD';
      } else if (moment(date).isValid()) {
        return 'Invalid date: Please input a date no later than today';
      } else if (!moment(date).isValid()) {
        return 'Invalid date: Please input a date with a valid month and date.';
      }
    }
    return 'Unknown error.';
  }

  signUp() {
    this.registerData.firstName = this.signForm2.get('Firstname').value;
    this.registerData.lastName = this.signForm2.get('Lastname').value;
    this.registerData.country = this.country;
    this.registerData.phoneNumber = this.signForm2.get('Phonenumber').value;
    this.registerData.bithDate = this.signForm2.get('Birthday').value;
    this.registerData.birthPlace = this.signForm2.get('Birthplace').value;
    this.registerData.gender = this.signForm2.get('Gender').value;
    console.log(this.registerData);
    this.signinService.signup(this.registerData).subscribe(response => {
      console.log(response);
      localStorage.setItem('forgorPass', 'closed');
      this.dialog.closeAll();
      this.data = {
        status: true,
        message: "Success"
      }
      this.dialog.open(ConfirmComponent, {
        panelClass: 'custom-dialog-container',
        width: '300px',
        height: '300px',
        data: this.data
      });
    }, error => {
      this.data = {
        status: true,
        message: "Failed"
      }
      this.dialog.open(ConfirmComponent, {
        panelClass: 'custom-dialog-container',
        width: '300px',
        height: '300px',
        data: this.data
      });
      console.log(error);
    });
  }

  get getForm1() {
    return this.signForm1.controls;
  }
  get getForm2() {
    return this.signForm2.controls;
  }

  callform_pre() {
    if (this.formstate === 'form2') {
      this.formstate = 'form1';
    }
  }
  callform_back() {
    this.dialog.closeAll();
  }
  callform_next() {
    if (this.signForm1.valid) {
      this.registerData.username = this.signForm1.get('Username').value;
      this.registerData.email = this.signForm1.get('Email').value;
      this.registerData.password = this.signForm1.get('Password').value;
      console.log(this.registerData);
      if (this.formstate === 'form1') {
        this.formstate = 'form2';
      }
    }
  }

  countrySelected(selected) {
    console.log(selected);
    this.country = selected;
  }
}
