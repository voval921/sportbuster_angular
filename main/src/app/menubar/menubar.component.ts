import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SigninformComponent } from '../shared/signin/signinform/signinform.component';
import { SignindialogComponent } from '../shared/signin/signindialog/signindialog.component';
import { SigninService } from '../shared/_service/signin/signin.service';

declare const $: any;

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  selected: boolean,
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
}
export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

export const ROUTES: RouteInfo[] = [{
  path: 'DashboardID',
  title: 'Dashboard',
  type: 'link',
  icontype: 'dashboard',
  selected: true,
},
{
  path: 'NewsID',
  title: 'News',
  type: 'link',
  icontype: 'fiber_new',
  selected: false,
},
{
  path: 'ResultsID',
  title: 'Results',
  type: 'link',
  icontype: 'subject',
  selected: false,
},
{
  path: 'FantaID',
  title: 'Fanta',
  type: 'link',
  icontype: 'blur_on',
  selected: false,
}];

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})

export class MenubarComponent implements OnInit {

  menu_font: boolean;
  loggedUser: any;
  menu_show: boolean;
  vis_view: any;
  isloggedUser: any;

  constructor(
    private dialog: MatDialog,
    private signinService: SigninService,
  ) { }
  public menuItems: any[];

  ngOnInit() {

    this.loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    if (this.loggedUser != undefined) {
      this.isloggedUser = JSON.parse(sessionStorage.getItem('loggedUser')).username;
    }


    // this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.signinService.change.subscribe(loggedUser => {
      this.loggedUser = loggedUser;
    });
    // $('.mobile-view-block').click(function (e) {
    //   console.log('clicked');
    //   // this.menu_show = false;
    //   document.getElementById('closemenu').click();
    // });
  }

  hideMenu() {
    this.menu_show = false;
  }

  openDialog(): void {
    this.vis_view = SigninformComponent;
    let dialogRef = this.dialog.open(SignindialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '380px',
      height: '550px',
      data: { component: this.vis_view }
    });
  }

  newMenu() {
    this.menu_show = true;
  }

  gotoItem(index) {
    for (let list of this.menuItems) {
      list.selected = false;
    }
    this.menu_show = false;
    this.menuItems[index].selected = true;
    let path = this.menuItems[index].path;
    console.log(path);
    $('html, body').animate({
      scrollTop: $('#' + path).offset().top
    }, 500);
    console.log($('#' + path).offset().top);
  }
}
