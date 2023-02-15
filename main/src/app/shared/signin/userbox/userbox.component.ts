import { Component, Input, OnInit } from '@angular/core';
import { SigninService } from "../../_service/signin/signin.service";
import { MatDialog } from '@angular/material';
import { SignindialogComponent } from '../signindialog/signindialog.component';
import { LogoutconfirmComponent } from '../logoutconfirm/logoutconfirm.component';

@Component({
  selector: 'app-userbox',
  templateUrl: './userbox.component.html'
})
export class UserboxComponent implements OnInit {

  loggedUser: any;
  intials: string;
  profileImage: string;
  isloggedUser: any;

  constructor(
    private signinService: SigninService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.isloggedUser = JSON.parse(sessionStorage.getItem('loggedUser')).username;

    this.signinService.change.subscribe(loggedUser => {
      this.loggedUser = loggedUser;
      if (this.loggedUser !== null && typeof (this.loggedUser) !== 'undefined' && this.loggedUser !== '') {
        this.intials = this.loggedUser.firstName.charAt(0) + this.loggedUser.lastName.charAt(0);
      }
    });
  }

  logout() {
    this.dialog.closeAll();
    let dialogRef = this.dialog.open(SignindialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '400px',
      height: '370px',
      data: { component: LogoutconfirmComponent }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.dialog.open(SignindialogComponent, {
    //     panelClass: 'custom-dialog-container',
    //     width: '380px',
    //     height: '530px',
    //     data: { component: SigninformComponent }
    //   });
    // })
  }

}
