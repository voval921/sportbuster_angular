import {Component} from '@angular/core';
import {BaseResultsComponent} from "../base-results/base-results.component";
import {TournamentChoice} from "../../shared/sport/tournament-select/tournament-select.component";
import {
  TableDataFormula1Results
} from "../../md/md-table/table-results-formula1/table-results-formula1.component";
import {Formula1Pilot, Formula1Session, Formula1SessionResults} from "../../shared/sport/object/formula1";

export const filterTypeConstResults = {
  "CLASSIFICATION": ["BEST_TIME", "POSITION", "STARTING_GRID"],
  "FASTEST_LAP": ["FASTEST_LAP"],
  "SPEED_TRAP": ["SPEED_TRAP"]
}

@Component({
  selector: 'app-results-formula1',
  templateUrl: './results-formula1.component.html',
})
export class ResultsFormula1Component extends BaseResultsComponent {

  formula1ResultsParams = {
    selectedSport: "FORMULA1",
  }

  private gpChoices: TournamentChoice[] = [];

  private selectedTournament: number;
  private filtersLoadedResults: Promise<boolean>;
  private tableDataResults: TableDataFormula1Results[] = [];
  private resultType: string = "CLASSIFICATION";
  private data;

  ngOnInit() {
    this.getGpChoices();
  }

  gpChanged(data) {
    this.selectedTournament = data;
    this.getResults();
  }

  getGpChoices() {
    let now = new Date();
    now.setDate(now.getDate() + 3);
    let limitDate = this.datepipe.transform(now, 'yyyy-MM-dd');
    return this.tournamentsService.getTournaments(this.formula1ResultsParams.selectedSport, limitDate).subscribe(
      data => {
        for (let i in data) {
          this.setChoices(data[i]);
        }
        this.filtersLoaded = Promise.resolve(true);
        this.selectedTournament = this.gpChoices[0]['id'];
      },
      err => console.error(err)
    );
  }

  setChoices(result) {
    let choice = {
      id: result['id'],
      name: result['idCompetizione']['nome']
    };
    this.gpChoices.push(choice);
  }

  getResults() {
    this.tableDataResults = [];
    return this.resultsService.getResultsByTournament(this.formula1ResultsParams.selectedSport,
      this.selectedTournament
    ).subscribe(
      data => {
        this.data = data;
        this.filtersLoadedResults = Promise.resolve(true);
      },
      err => console.error(err)
    );
  }

}
