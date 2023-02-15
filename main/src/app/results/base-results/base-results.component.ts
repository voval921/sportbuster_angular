import {Component, Input, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ResultsService} from "../../shared/_service/results/results.service";
import {TournamentsService} from "../../shared/_service/tournaments/tournaments.service";

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDatepicker} from "@angular/material";
import {DatePipe} from "@angular/common";
import {TableDataResults} from "../../md/md-table/table-results/table-results.component";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";

import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import {FilterPipe, GroupByPipe, OrderPipe} from "../../md/md-table/md-table-base/table-pipe.pipe";
import {AppConstants} from "../../app-constants";

declare var $: any;
const moment = _rollupMoment || _moment;

export interface ResultsParams {
  selectedSport: string,
  page: number,
  size: number,
  totalPages: number,
  totalElements: number,
  tableData: TableDataResults[]
}


@Component({
  selector: 'app-base-results',
  templateUrl: './base-results.component.html',
  providers: [
    OrderPipe,
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: LOCALE_ID, useValue: {useUtc: true}}
  ]
})
export class BaseResultsComponent implements OnInit {

  private loading = false;
  protected filtersLoaded: Promise<boolean>;


  myDate = new FormControl(moment());

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  @Input() resultsParams: ResultsParams;

  constructor(protected resultsService: ResultsService,
              protected tournamentsService: TournamentsService,
              private adapter: DateAdapter<any>,
              public datepipe: DatePipe,
              public filterPipe: FilterPipe,
              public orderPipe: OrderPipe,
              public groupByPipe: GroupByPipe) {}

  ngOnInit() {
  }

  getResults() {
    let currentChoiceDate = this.datepipe.transform(this.myDate.value.toDate(), 'yyyy-MM-dd');
    return this.resultsService.getResultsByMatchDate(this.resultsParams.selectedSport, currentChoiceDate, String(this.resultsParams.page), String(this.resultsParams.size)).subscribe(
      data => {
        this.resultsParams.totalPages = data['totalPages'];
        this.resultsParams.totalElements = data['totalElements'];
        for (let result of data['content']) {
          this.setDataRow(result);
        }
        this.filtersLoaded = Promise.resolve(true);
      },
      err => console.error(err)
    );
  }

  setDataRow(result) {
    let tournamentId = result['tournament']['id'];
    let prestige = result['tournament']['idCompetizione']['prestige'];
    let tableDataRow = {
      nation: result['tournament']['idCompetizione']['country']['alpha2Code'],
      tournamentId: tournamentId,
      tournamentName: result['tournament']['idCompetizione']['nome'],
      matchId: result['id'],
      homeTeam: result['homeTeam']['name'],
      homeTeamCode: result['homeTeam']['mainCode'],
      awayTeam: result['awayTeam']['name'],
      awayTeamCode: result['awayTeam']['mainCode'],
      homeScore: result['homeScore'],
      awayScore: result['awayScore'],
      prestige: prestige
    };
    this.resultsParams.tableData.push(tableDataRow);
  }

  handleScroll = () => {
    if (this.resultsParams.page<this.resultsParams.totalPages-1 && this.resultsParams.size*(this.resultsParams.page+1)<this.resultsParams.totalElements) {
      this.resultsParams.page += 1;
      this.getResults();
    }
  }

  onDate(event): void {
    this.resultsParams.tableData = [];
    this.resultsParams.page = 0;
    this.getResults();
  }

}
