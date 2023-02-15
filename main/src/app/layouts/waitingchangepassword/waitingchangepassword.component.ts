import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractWaitingComponent} from "../waiting/waiting.component";

@Component({
  selector: 'app-waitingchangepassword',
  templateUrl: '../waiting/waiting.component.html',
  styleUrls: ['../waiting/waiting.component.css']
})
export class WaitingchangepasswordComponent extends AbstractWaitingComponent {

  ngOnInit() {
    this.token = this.scrapToken();
    if (this.token) {
      this.signinService.changePassword(this.token).subscribe(response => {
          this.loading = false;
          this.confirm = "success";
          sessionStorage.setItem('usernameToChangePassword', response['username']);
          setTimeout(() => {
            this.router.navigate(['reset_password']);
          }, 2000);
        },
        error => {
          this.loading = false;
          this.confirm = "danger"
          console.log(error);
        });
    }
  }

}
