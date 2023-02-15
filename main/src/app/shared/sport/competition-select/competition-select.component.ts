import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TournamentsService} from '../../_service/tournaments/tournaments.service';
import {Sport} from "../../../match/match.component";


@Component({
  selector: 'app-component-select',
  templateUrl: './competition-select.component.html',
  styleUrls: ['./competition-select.component.css']
})
export class CompetitionSelectComponent implements OnChanges, OnInit {

  private competitions: Array<any> = [];
  @Input()
  private selectedSport: Sport;
  private selectedCompetition: any;
  @Output() selected = new EventEmitter<string>();

  constructor(private tournamentService: TournamentsService) { }

  ngOnInit() {
    this.getCompetitions(this.selectedSport);
    this.selected.emit(this.selectedCompetition);
  }

  ngOnChanges() {
    this.getCompetitions(this.selectedSport);
  }

  changeCompetition(data) {
    this.selectedSport = data;
    this.selected.emit(this.selectedCompetition);
  }

  getCompetitions(filter: Sport) {
    this.competitions = [];
    if (filter !== undefined) {
      return this.tournamentService.getCompetitions(filter).subscribe(
        data => {
          for (let i in data) {
            this.competitions.push(data[i]);
          }
        },
        err => console.error(err)
      );
    }
  }

}
