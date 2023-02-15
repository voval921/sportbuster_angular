import { Component, OnInit, OnDestroy } from '@angular/core';

declare const $: any;
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  selected: boolean,
  hover: boolean,
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

export const ROUTES: RouteInfo[] = [
{
  path: 'NewsID',
  title: 'News',
  type: 'link',
  icontype: 'fiber_new',
  selected: false,
  hover: false,
},
{
  path: 'ResultsID',
  title: 'Results',
  type: 'link',
  icontype: 'subject',
  selected: false,
  hover: false,
},
{
  path: 'FantaID',
  title: 'Fanta',
  type: 'link',
  icontype: 'blur_on',
  selected: false,
  hover: false,
}];

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})


export class RightbarComponent implements OnInit, OnDestroy {
  public menuItems: any[];
  idList = ['NewsID', 'ResultsID', 'FantaID'];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // console.log(this.menuItems);
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  gotoItem(index) {
    window.removeEventListener('scroll', this.scroll, true);
    for (let list of this.menuItems) {
      list.selected = false;
    }
    this.menuItems[index].selected = true;
    let path = this.menuItems[index].path;
    // console.log(path);
    $('html, body').animate({
      scrollTop: $('#' + path).offset().top
    }, 500);
    setTimeout(()=> {
      window.addEventListener('scroll', this.scroll, true)
    }, 501);
    // console.log($('#' + path).offset().top);
  }

  overMouse(index) {
    // for (let list of this.menuItems) {
    //   list.hover = false;
    // }
    this.menuItems[index].hover = true;
  }

  leaveMouse(index) {
    this.menuItems[index].hover = false;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    // console.log(event.srcElement.scrollTop);
    // console.log($('html, body').scrollTop());
    let windowScroll = $('html, body').scrollTop();
    for (let list of this.idList) {
      // console.log($('#' + list).offset().top);
    }
    if (windowScroll <= $('#' + this.idList[1]).offset().top / 2) {
      for (let list of this.menuItems) {
        list.selected = false;
      }
      this.menuItems[0].selected = true;
    }

    if (windowScroll > $('#' + this.idList[1]).offset().top / 2
      && windowScroll <= ($('#' + this.idList[2]).offset().top + $('#' + this.idList[1]).offset().top) / 2) {
      for (let list of this.menuItems) {
        list.selected = false;
      }
      this.menuItems[1].selected = true;
    }

    // if (windowScroll > ($('#' + this.idList[2]).offset().top + $('#' + this.idList[1]).offset().top) / 2
    //   && windowScroll <= ($('#' + this.idList[3]).offset().top + $('#' + this.idList[2]).offset().top) / 2) {
    //   for (let list of this.menuItems) {
    //     list.selected = false;
    //   }
    //   this.menuItems[2].selected = true;
    // }

    if (windowScroll > ($('#' + this.idList[2]).offset().top + $('#' + this.idList[1]).offset().top) / 2) {
      for (let list of this.menuItems) {
        list.selected = false;
      }
      this.menuItems[2].selected = true;
    }

  };

  scrollHandler(event: any) {
    console.log(event.srcElement.scrollTop);
  }
}
