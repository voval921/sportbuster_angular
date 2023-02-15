import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  private loadComponent = "FOOTBALL";

  constructor() {
  }

  ngOnInit() {
  }

  loadMyChildComponent(sport: string) {
    this.loadComponent = sport;
  }


}

