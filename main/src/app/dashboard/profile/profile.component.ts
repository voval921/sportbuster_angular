import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { SigninService } from 'src/app/shared/_service/signin/signin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  SelectedCountry: string = '';
  country: string = '';
  gender_text: string;
  gender_value: string;
  role_text: string;
  editable = "save";
  profileData = {
    id: '',
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
  };


  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private signinService: SigninService,
  ) {
    this.profileForm = this.formbuilder.group({
      Username: ['', Validators.required],
      Password: ['', [Validators.required, Validators.pattern('(?!^[0-9]*$)(?=.*[A-Z])(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,30})$')]],
      Email: ['', Validators.required],
      Firstname_un: [''],
      Lastname_un: [''],
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Usertype: ['', Validators.required],
      Birthday: ['', Validators.required],
      Birthplace: ['', Validators.required],
      Gender: ['', Validators.required],
      Gender_text: [''],
    });
    this.profileForm.get('Username').disable();
    this.profileForm.get('Email').disable();
    this.profileForm.get('Password').disable();
    this.profileForm.get('Firstname_un').disable();
    this.profileForm.get('Lastname_un').disable();
    this.profileForm.get('Usertype').disable();
    this.profileForm.get('Firstname').disable();
    this.profileForm.get('Lastname').disable();
    this.profileForm.get('Gender_text').disable();
    this.profileForm.get('Birthday').disable();
    this.profileForm.get('Birthplace').disable();
  }

  currentDate(value: string) {
    return moment(value);
  }

  genderSelection(event) {
    this.gender_text = event.value == "M" ? "Male" : "Female"
    this.gender_value = event.value;
    this.profileForm.get('Gender_text').setValue(this.gender_text);
  }

  ngOnInit() {
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    this.country = loggedUser.country.codice;
    this.profileData.id = loggedUser.id;
    this.profileForm.get('Username').setValue(loggedUser.username);
    this.profileForm.get('Firstname').setValue(loggedUser.firstName);
    this.profileForm.get('Lastname').setValue(loggedUser.lastName);
    this.profileForm.get('Firstname_un').setValue(loggedUser.firstName);
    this.profileForm.get('Lastname_un').setValue(loggedUser.lastName);
    this.profileForm.get('Email').setValue(loggedUser.email);
    this.profileForm.get('Password').setValue(loggedUser.password);
    this.profileForm.get('Usertype').setValue(loggedUser.roles[0].code);
    this.SelectedCountry = this.country
    this.profileForm.get('Birthday').setValue(this.currentDate(loggedUser.birthDate));
    this.profileForm.get('Birthplace').setValue(loggedUser.birthPlace.localita);
    if (loggedUser.gender) {
      this.gender_text = loggedUser.gender == "M" ? "Male" : "Female";
      this.role_text = 'USER.' + loggedUser.roles[0].code;
    }
    this.profileForm.get('Gender_text').setValue(this.gender_text);
  }

  countrySelected(event) {
    this.country = event;
  }

  //make input tag editable
  editableUsername() {
    this.profileForm.get('Username').enable();
  }
  editableEmail() {
    this.profileForm.get('Email').enable();
  }
  editableFirstname() {
    this.profileForm.get('Firstname').enable();
  }
  editableLastname() {
    this.profileForm.get('Lastname').enable();
  }
  editableCountry() {
    this.editable = "edit";
  }
  editableBirthday() {
    this.profileForm.get('Birthday').enable();
  }
  editableBirthplace() {
    this.profileForm.get('Birthplace').enable();
  }
  editableGender() {
    this.profileForm.get('Gender_text').enable();
  }

  //make input tag disable
  disableUsername() {
    this.profileForm.get('Username').disable();
  }
  disableEmail() {
    this.profileForm.get('Email').disable();
  }
  disableFirstname() {
    this.profileForm.get('Firstname').disable();
  }
  disableLastname() {
    this.profileForm.get('Lastname').disable();
  }
  disableCountry() {
    this.editable = "save";
  }
  disableBirthday() {
    this.profileForm.get('Birthday').disable();
  }
  disableBirthplace() {
    this.profileForm.get('Birthplace').disable();
  }
  disableGender() {
    this.profileForm.get('Gender_text').disable();
  }

  get checkForm() {
    return this.profileForm.controls;
  }

  gotodashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  confirmProfile() {
    this.profileData.username = this.profileForm.get('Username').value;
    this.profileData.email = this.profileForm.get('Email').value;
    this.profileData.firstName = this.profileForm.get('Firstname').value;
    this.profileData.lastName = this.profileForm.get('Lastname').value;
    this.profileData.country = this.country;
    this.profileData.bithDate = this.profileForm.get('Birthday').value;
    this.profileData.bithDate = this.profileForm.get('Birthday').value;
    this.profileData.birthPlace = this.profileForm.get('Birthplace').value;
    this.profileData.gender = this.profileForm.get('Gender').value;
    this.signinService.updateUser(this.profileData).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });

  }
}
