import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FilterPipe, GroupByPipe, OrderPipe} from '../../../md/md-table/md-table-base/table-pipe.pipe';
import {SportService} from '../../_service/sport/sport.service';
import {AthleteService} from '../../_service/athlete/athlete.service';
import {DatePipe} from '@angular/common';
import {CountryService} from "../../_service/country/country.service";

export interface Athlete {
  firstName: string,
  lastName: string,
  country: string,
  gender: string,
  birthDate: string,
  birthPlace: string,
  height: string,
  sport: string,
  status: string,
  roles: string[],
  laterality: string
}


@Component({
  selector: 'app-insert-athlete-dialog',
  templateUrl: './insert-athlete-dialog.component.html',
  styleUrls: ['./insert-athlete-dialog.component.css']
})
export class InsertAthleteDialogComponent implements OnInit {

  control = new FormControl();

  private countries: any[] = [];
  private sports: any[] = [];
  private genders = [ 'MALE', 'FEMALE'];
  private types = [ 'PLAYER', 'COACH', 'COACH_PLAYER' ];
  private roles: Array<any> = [];

  private lateralities = [ 'RIGHT', 'LEFT', 'AMBIDEXTROUS'];

  private filteredCountries: Observable<any[]>;
  private athlete: Athlete;

  constructor(private countryService: CountryService,
              private sportService: SportService,
              private athleteService: AthleteService,
  ) {
    this.athlete = {
      firstName: '',
      lastName: '',
      country: '',
      gender: 'MALE',
      birthDate: '',
      birthPlace: '',
      height: '',
      sport: '',
      status: 'Attivo',
      roles: [],
      laterality: ''
    };
  }

  private _filter(value: string): string[] {
    return this.countries.filter(country => country['country'].toLowerCase().includes(value));
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    return this.countryService.getCountries(this.athlete.country).subscribe(
      data => {
        for (let i in data) {
          this.countries.push(data[i]);
        }
        this.filteredCountries = this.control.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      },
      err => console.error(err)
    );
  }

  getSportRoles(sportSelected: any) {
    this.roles = [];
    this.athlete.roles = [];
    for (const sport of this.sports) {
      if(sportSelected['sport'] === sport['sport']) {
        this.roles = sport['roles'];
        return true;
      }
    }
  }

  insertAthlete(): any {
    return this.athleteService.setAthlete(this.athlete).subscribe(
      data => {
      },
      err => console.error(err)
    );
  }

  sportChanged(selected) {
    this.athlete.sport = selected;
    this.getSportRoles(selected);
  }

  sportRoles(sportList) {
    this.sports = sportList;
  }

}
