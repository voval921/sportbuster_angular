import { Component } from '@angular/core';
import {AbstractWaitingComponent} from "../waiting/waiting.component";

@Component({
  selector: 'app-waitingconfirm',
  templateUrl: '../waiting/waiting.component.html',
  styleUrls: ['../waiting/waiting.component.css']
})
export class WaitingconfirmComponent extends AbstractWaitingComponent {

  ngOnInit() {
    this.token = this.scrapToken();
    if (this.token) {
      this.signinService.confirmRegister(this.token).subscribe(response => {
        this.loading = false;
        this.confirm = "success"
        setTimeout(() => {
          this.router.navigate(['']);
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
