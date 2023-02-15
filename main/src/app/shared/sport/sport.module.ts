import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SportSelectComponent} from './sport-select/sport-select.component';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TournamentSelectComponent } from './tournament-select/tournament-select.component';
import {TranslateModule} from '@ngx-translate/core';
import {CompetitionSelectComponent} from './competition-select/competition-select.component';
import { CountryAutocompleteComponent } from './country-autocomplete/country-autocomplete.component';

@NgModule({
  declarations: [SportSelectComponent, TournamentSelectComponent, CompetitionSelectComponent, CountryAutocompleteComponent],
  imports: [
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule
  ],
  exports: [
    SportSelectComponent,
    TournamentSelectComponent,
    CompetitionSelectComponent,
    CountryAutocompleteComponent
  ]
})
export class SportModule { }
