import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GroupByPipe} from "../md-table-base/table-pipe.pipe";
import {AppConstants} from "../../../app-constants";


export interface TableDataResults {
  nation: string;
  tournamentId: number;
  tournamentName: string;
  matchId: number;
  homeTeam: string,
  homeTeamCode: string,
  awayTeam: string,
  awayTeamCode: string,
  homeScore: number,
  awayScore: number,
  prestige: number
}


@Component({
  selector: 'app-table-results',
  templateUrl: './table-results.component.html',
  styleUrls: ['./table-results.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GroupByPipe]
})
export class TableResultsComponent implements OnInit {

  @Input()
  public data: TableDataResults[];

  public searchString: string;

  @Input()
  public selectedSport: string;

  readonly ASSETS_URL_LOGO_TEAMS = AppConstants.ASSETS_URL_LOGO_TEAMS;
  private url_logo_teams: string;

  constructor() {
  }

  ngOnInit() {
    this.url_logo_teams = this.ASSETS_URL_LOGO_TEAMS+"/"+this.selectedSport;
  }

}
