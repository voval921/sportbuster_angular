import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface SelectYearsParams {
  preSelection: number,
  range: number,
  shift: number,
  min: number
}

@Component({
  selector: 'app-select-year',
  templateUrl: './select-year.component.html',
  styleUrls: ['./select-year.component.css']
})
export class SelectYearComponent implements OnInit {

  @Input()
  public data: SelectYearsParams;
  private years: Array<number> = [];
  private selectedYear: number;
  @Output() selected = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    let startYear = (this.data.preSelection || this.data.min) + this.data.shift;
    while ( startYear >= this.data.preSelection - this.data.range  ) {
      this.years.push(startYear--);
    }
    this.selectedYear = this.data.preSelection;
  }

  changeYear(data) {
    this.selectedYear = data;
    this.selected.emit(this.selectedYear);
  }

}
