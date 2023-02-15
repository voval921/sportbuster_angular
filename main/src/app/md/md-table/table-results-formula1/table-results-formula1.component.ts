import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GroupByPipe, GroupByPipeObj, OrderPipe} from "../md-table-base/table-pipe.pipe";
import {Formula1Pilot, Formula1Session, Formula1SessionResults} from "../../../shared/sport/object/formula1";

export interface TableDataFormula1Results {
  session: Formula1Session;
  pilot: Formula1Pilot
  results: Formula1SessionResults;
}


@Component({
  selector: 'app-table-results-formula1',
  templateUrl: './table-results-formula1.component.html',
  styleUrls: ['./table-results-formula1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GroupByPipe, OrderPipe, GroupByPipeObj]
})
export class TableResultsFormula1Component implements OnInit {

  @Input()
  public data: any[];

  private dataSession;
  private dataPresentation = [];

  @Input()
  public selectedSport: string;

  constructor(private orderPipe: OrderPipe, private groupByObj: GroupByPipeObj) {
  }

  ngOnInit() {
    this.getDataPresentation();
  }

  getDataPresentation() {
    for (let i in this.data) {
      this.dataSession = {};
      let session = this.data[i];
      this.setDataSession(session);
      this.dataPresentation.push(this.dataSession);
    }
  }

  setDataSession(session) {
    this.dataSession =  {
      'numberOfManches': [],
      'session': session['id'],
      'nation' : session['tournament']['idCompetizione']['country']['alpha2Code'],
      'tournamentId' : session['tournament']['id'],
      'tournamentName' : session['tournament']['idCompetizione']['nome'],
      'sessionType' : session['session'],
      'results' : []
    }
    for (let pilotMatch of session['matchAthletes']) {
      this.setPilotResultsBase(pilotMatch);
    }
    for (let manche of session['manches']) {
      this.dataSession['numberOfManches'].push({'manche': manche['manche']});
      this.setDataManche(manche);
    }
  }

  setPilotResultsBase(pilotMatch) {
    let pilot = pilotMatch['athlete'];
    let team = pilotMatch['team'];
    let pilotResultsBase = {
      'pilotId': pilot['id'],
      'pilotName': pilot['firstName'],
      'pilotSurname': pilot['lastName'],
      'pilotCompactName': pilot['lastName'] + " " + pilot['firstName'].charAt(0) + ".",
      'team': team['name'],
      'position': undefined,
      'startingPosition': undefined,
      'difference': undefined,
      'fastestLap': [],
      'speedTrap': undefined,
      'laps': undefined,
      'finalResult': undefined,
      'absoluteFastestLap': undefined
    }
    this.dataSession.results.push(pilotResultsBase);
  }

  setDataManche(manche) {
    for (let result of manche['results']) {
      this.setPilotResults(result, manche['id']);
    }
  }

  setPilotResults(result, idManche) {
    for (let pilotResultIndex in this.dataSession.results) {
      if (result['pilot']['id'] == this.dataSession.results[pilotResultIndex].pilotId) {
        if (result['position'] != undefined) {
          this.dataSession.results[pilotResultIndex]['position'] = result['position'];
        }
        if (result['fastestLap'] != undefined) {
          this.dataSession.results[pilotResultIndex]['fastestLap'].push(
            {
            'time' : result['fastestLap'],
            'manche' : idManche
            });
          if (result['absoluteFastestLap'] == undefined ||
            result['fastestLap']<this.dataSession.results[pilotResultIndex]['absoluteFastestLap']) {
            this.dataSession.results[pilotResultIndex]['absoluteFastestLap'] = result['fastestLap'];
          }
        }
        if (result['startingPosition'] != undefined) {
          this.dataSession.results[pilotResultIndex]['startingPosition'] = result['startingPosition'];
        }
        if (result['finalResult'] != undefined) {
          this.dataSession.results[pilotResultIndex]['finalResult'] = result['finalResult'];
        }
        if (result['speedTrap'] != undefined) {
          this.dataSession.results[pilotResultIndex]['speedTrap'] = result['speedTrap'];
        }
        if (result['laps'] != undefined) {
          this.dataSession.results[pilotResultIndex]['laps'] = result['laps'];
        }
      }
      this.dataSession.results[pilotResultIndex]['difference'] =
        this.dataSession.results[pilotResultIndex]['startingPosition'] - this.dataSession.results[pilotResultIndex]['position'];
    }
  }

}
