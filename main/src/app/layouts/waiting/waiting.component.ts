import { Component, OnInit } from '@angular/core';
import {SigninService} from "../../shared/_service/signin/signin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class AbstractWaitingComponent implements OnInit{

  public loading = true;
  public confirm:  string;
  protected token: string;

  constructor(
    protected signinService: SigninService,
    protected router: Router,
  ) {
  }

  ngOnInit() {}

  protected scrapToken(): string {
    let url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    return url.split("=")[1];
  }

}
