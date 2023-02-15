import { Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { CountryService } from "../../_service/country/country.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-country-autocomplete',
  templateUrl: './country-autocomplete.component.html',
  styleUrls: ['./country-autocomplete.component.css']
})
export class CountryAutocompleteComponent implements OnInit, OnChanges {

  control = new FormControl('', Validators.required);

  private countries: any[] = [];
  private filteredCountries: Observable<any[]>;
  private country: string = '';

  countryCode: string = '';
  @Input() Country: string = '';
  @Input() State: string = '';
  @Output('optionSelected') optionSelected = new EventEmitter<string>();

  constructor(private countryService: CountryService,
    private tranService: TranslateService,
  ) {
    this.control.disable();
  }

  private _filter(value: string): string[] {
    return this.countries.filter(country => country['country'].toLowerCase().includes(value));
  }

  ngOnInit() {
    this.getCountries();
    if (this.Country !== '') {
      this.country = this.Country;
    }
  }
  get formValid() {
    return this.control;
  }

  getCountries() {
    return this.countryService.getCountries(this.country).subscribe(
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

  changeSelection(data) {
    this.countryCode = data;
    this.tranService.get('COUNTRY.' + this.countryCode).subscribe(result => {
      this.country = result;
      this.optionSelected.emit(this.countryCode);
    });
  }

  changeSelectionValue() {
    if (this.country === '') {
      this.optionSelected.emit('');
    }
    // else {
    //   this.optionSelected.emit(this.country);
    //   for (let list of this.countries) {
    //     if (this.country === list.country) {
    //       this.optionSelected.emit(this.countryCode);
    //     } else {
    //       this.control.setErrors({ 'invalid': true });
    //       this.optionSelected.emit('');
    //     }
    //   }
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.State == 'edit') {
      this.control.enable();
    } else if (this.State == 'save') {
      this.control.disable();
    }
  }
}
