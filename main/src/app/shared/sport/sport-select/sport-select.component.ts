import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SportService} from '../../_service/sport/sport.service';


@Component({
  selector: 'app-sport-select',
  templateUrl: './sport-select.component.html',
  styleUrls: ['./sport-select.component.css']
})
export class SportSelectComponent implements OnInit {

  private sports: Array<any> = [];
  private selectedSport: any;
  @Output() selected = new EventEmitter<any>();
  @Output() sportList = new EventEmitter<Array<any>>();

  constructor(private sportService: SportService) { }

  ngOnInit() {
    this.getSports();
    this.selected.emit(this.selectedSport);
    this.sportList.emit(this.sports);
  }

  changeSport(data) {
    this.selectedSport = data;
    this.selected.emit(this.selectedSport);
  }

  getSports() {
    return this.sportService.getSports().subscribe(
      data => {
        for (let i in data) {
          this.sports.push(data[i]);
        }
      },
      err => console.error(err)
    );
  }

}
