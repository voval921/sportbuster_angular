import {Component, Input, OnInit} from '@angular/core';
import {SelectYearsParams} from '../shared/form-custom/select-year/select-year.component';
import {AthleteService} from '../shared/_service/athlete/athlete.service';

export interface Sport {
  sport: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './match.component.html'
})
export class MatchComponent implements OnInit {

  public yearSelectData: SelectYearsParams = {
    preSelection: new Date().getFullYear(),
    range: 2,
    shift: 0,
    min: 1980
  };
  private selectedYear: number;
  private selectedSport: Sport;
  private selectedCompetition: any;

  constructor(private athleteService: AthleteService) {}

  ngOnInit() {
    this.selectedYear = this.yearSelectData.preSelection;
  }

  recoverData(selected) {
    return this.athleteService.getAthlete().subscribe(
      data => {
        console.log(data);
      },
      err => console.error(err)
    );
  }

  sportChanged(selected) {
    console.log('pluto');
    this.selectedSport = selected;
  }

  yearChanged(selected) {
    this.selectedYear = selected;
  }

  competitionChanged(selected) {
    console.log('pippo');
    this.selectedCompetition = selected;
  }

}
