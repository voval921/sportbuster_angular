import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table-base/md-table.component';

import * as Chartist from 'chartist';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  public tableData: TableData;
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {
  }
  ngAfterViewInit() {
  }
}
