import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TournamentsService} from "../../_service/tournaments/tournaments.service";

export interface TournamentChoice {
  'id': number,
  'name': string
}

@Component({
  selector: 'app-tournament-select',
  templateUrl: './tournament-select.component.html',
  styleUrls: ['./tournament-select.component.css']
})
export class TournamentSelectComponent implements OnInit {

  private selectedTournament: number;
  @Output() selected = new EventEmitter<number>();

  @Input() choices;

  constructor() { }

  ngOnInit() {
    this.selectedTournament=this.choices[0]['id'];
    this.selected.emit(this.selectedTournament);
  }

  changeTournament(data){
    this.selectedTournament = data;
    this.selected.emit(this.selectedTournament);
  }

}
