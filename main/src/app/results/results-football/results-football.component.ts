import {Component} from '@angular/core';
import {BaseResultsComponent} from "../base-results/base-results.component";
import {AppConstants} from "../../app-constants";

@Component({
  selector: 'app-results-football',
  templateUrl: './results-football.component.html'
})
export class ResultsFootballComponent extends BaseResultsComponent {

  private SPORT = "FOOTBALL";

  resultsParams = {
    selectedSport: "FOOTBALL",
    page: 0,
    size: 25,
    totalPages: 1,
    totalElements: 0,
    tableData: []
  }

  ngOnInit() {
    this.getResults();
  }

}
