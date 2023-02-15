import {Component} from '@angular/core';
import {BaseResultsComponent} from "../base-results/base-results.component";

@Component({
  selector: 'app-results-basketball',
  templateUrl: './results-basketball.component.html'
})
export class ResultsBasketballComponent extends BaseResultsComponent {

  resultsParams = {
    selectedSport: "BASKETBALL",
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
