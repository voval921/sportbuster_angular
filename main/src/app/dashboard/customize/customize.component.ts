import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/shared/_service/signin/signin.service';
import {FilterPipeMatch} from "../../md/md-table/md-table-base/table-pipe.pipe";
import {CustomizationConstants} from "./customization-constants";

declare const $: any;


@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css'],
  providers: [FilterPipeMatch]

})
export class CustomizeComponent implements OnInit {

  readonly USER_SPORT = CustomizationConstants.USER_SPORT;
  readonly USER_SPORT_NEWS = CustomizationConstants.USER_SPORT_NEWS;

  userCustomizationsSport = [];
  userCustomizationsSportNews = [];
  active_sport = [];
  unactive_sport = [];
  active_sport_news = [];
  unactive_sport_news = [];

  activeData = {
    'customizeSport': [],
    'customizeNews': [],
  }

  constructor(
    private router: Router,
    private signinService: SigninService,
    private filter: FilterPipeMatch
  ) {

  }

  ngOnInit() {
    this.signinService.getUserCustomization().subscribe(response => {
        this.userCustomizationsSport = this.retrieveCustomizationByType(response, this.USER_SPORT);
        this.userCustomizationsSportNews = this.retrieveCustomizationByType(response, this.USER_SPORT_NEWS);
        this.active_sport = this.retrieveEnabledCustomization(this.userCustomizationsSport[0]['customizationValues'], true);
        this.unactive_sport = this.retrieveEnabledCustomization(this.userCustomizationsSport[0]['customizationValues'], false);
        this.active_sport_news = this.retrieveEnabledCustomization(this.userCustomizationsSportNews[0]['customizationValues'], true);
        this.unactive_sport_news = this.retrieveEnabledCustomization(this.userCustomizationsSportNews[0]['customizationValues'], false);
      },
      error => {
        console.log(error);
      });
  }

  retrieveCustomizationByType(data, type) {
    return this.filter.transform(data, ['customizationCode'], type);
  }

  retrieveEnabledCustomization(data, active) {
    return this.filter.transform(
      data,
      ['enabled'],
      active
    );
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  activeCustomization(event: CdkDragDrop<string[]>, customization) {
    this.drop(event);
    this.signinService.activeCustomization(customization, event.container.data[event.currentIndex]['value']).subscribe(response => {
       },
      error => {
        console.log(error);
      });
  }

  unactiveCustomization(event: CdkDragDrop<string[]>, customization) {
    this.drop(event);
    console.log(event.currentIndex);
    console.log(event.container.data);
    console.log(event.container);
    console.log(event.container.data[event.currentIndex]);
    this.signinService.unactiveCustomization(customization, event.container.data[event.currentIndex]['value']).subscribe(response => {
      },
      error => {
        console.log(error);
      });
  }

  gotodashboard() {
    this.router.navigateByUrl('/dashboard');
  }
  confirmCustomize() {
    this.activeData.customizeSport = [];
    this.activeData.customizeNews = [];
    var activeSportlist = document.getElementsByClassName('activeSport');
    var activeNewslist = document.getElementsByClassName('activeNews');
    for (let i = 0; i < activeSportlist.length; i++) {
      this.activeData.customizeSport.push(activeSportlist[i].innerHTML);
    }
    for (let i = 0; i < activeNewslist.length; i++) {
      this.activeData.customizeNews.push(activeNewslist[i].innerHTML);
    }
    this.signinService.customizeData(this.activeData).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  private retrieveActiveSportCustomization() {
  }

}
