
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdTableComponent } from './md-table/md-table-base/md-table.component';
import { MdChartComponent } from './md-chart/md-chart.component';
import { TableResultsComponent} from './md-table/table-results/table-results.component';
import {NgPipesModule} from "angular-pipes";
import {FilterPipe, GroupByPipe, OrderPipe, TablePipePipe} from './md-table/md-table-base/table-pipe.pipe';
import {FormsModule} from "@angular/forms";
import { TableResultsFormula1Component } from './md-table/table-results-formula1/table-results-formula1.component';
import {LanguageComponent} from "../shared/language/language.component";
import {LanguageModule} from "../shared/language/language.module";
import {TranslateModule} from "@ngx-translate/core";

export interface DropdownLink {
  title: string;
  iconClass?: string;
  routerLink?: string;
}

export enum NavItemType {
  Sidebar = 1, // Only ever shown on sidebar
  NavbarLeft = 2, // Left-aligned icon-only link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
  NavbarRight = 3 // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
}

export interface NavItem {
  type: NavItemType;
  title: string;
  routerLink?: string;
  iconClass?: string;
  numNotifications?: number;
  dropdownItems?: (DropdownLink | 'separator')[];
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgPipesModule,
    FormsModule,
    LanguageModule,
    TranslateModule
  ],
  declarations: [
    MdTableComponent,
    MdChartComponent,
    TableResultsComponent,
    TablePipePipe,
    GroupByPipe,
    FilterPipe,
    OrderPipe,
    TableResultsFormula1Component
  ],
  exports: [
    MdTableComponent,
    MdChartComponent,
    TableResultsComponent,
    TableResultsFormula1Component
  ],
  entryComponents: [LanguageComponent ]
})
export class MdModule { }
