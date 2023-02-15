import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { SigninService } from '../../_service/signin/signin.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutconfirm',
  templateUrl: './logoutconfirm.component.html',
  styleUrls: ['./logoutconfirm.component.css']
})
export class LogoutconfirmComponent implements OnInit, AfterViewChecked {

  public loading = false;

  constructor(
    private signinService: SigninService,
    private dialog: MatDialog,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    // document.getElementById('setFocus').focus();
    setTimeout(() => {
      // document.getElementById('setFocus').focus();
      // document.getElementById('calcelButton').blur();
    }, 100);
  }

  logout() {
    this.loading = true;
    setTimeout(() => {
      this.signinService.logout();
      sessionStorage.clear();
      this.dialog.closeAll();
      this.router.navigate(['/dashboard']);
    }, 500);
  }
  cancel() {
    this.dialog.closeAll();
  }

}
