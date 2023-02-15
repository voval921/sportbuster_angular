import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { ResultsComponent } from './results.component';
import { RouterModule } from "@angular/router";
import { ResultsRoutes } from "./results.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MdModule} from "../md/md.module";
import {MaterialModule} from "../app.module";
import {TranslateModule} from "@ngx-translate/core";
import {NgPipesModule} from "angular-pipes";
import {ScrollContainerComponent} from "../components/scroll-container/scroll-container.component";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MatDatepickerModule, MatOptionModule, MatSelectModule} from "@angular/material";
import {
  MatMomentDateModule
} from "@angular/material-moment-adapter";
import {SportModule} from "../shared/sport/sport.module";
import { ResultsFootballComponent } from './results-football/results-football.component';
import { ResultsBasketballComponent } from './results-basketball/results-basketball.component';
import { BaseResultsComponent } from './base-results/base-results.component';
import { ResultsFormula1Component } from './results-formula1/results-formula1.component';
import {FilterPipe, GroupByPipe, GroupByPipeObj, OrderPipe} from "../md/md-table/md-table-base/table-pipe.pipe";

@NgModule({
  declarations: [
    ResultsComponent,
    ScrollContainerComponent,
    ResultsFootballComponent,
    ResultsBasketballComponent,
    BaseResultsComponent,
    ResultsFormula1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ResultsRoutes),
    FormsModule,
    MdModule,
    MaterialModule,
    TranslateModule,
    NgPipesModule,
    InfiniteScrollModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    SportModule
  ],
  exports: [ ResultsComponent ],
  providers: [DatePipe, FilterPipe, OrderPipe, GroupByPipe, GroupByPipeObj]
})
export class ResultsModule { }

