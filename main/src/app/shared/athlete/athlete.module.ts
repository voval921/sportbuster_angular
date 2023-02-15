import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { InsertAthleteDialogComponent } from './insert-athlete-dialog/insert-athlete-dialog.component';
import {RouterModule} from '@angular/router';
import {
  MatAutocompleteModule,
  MatCardModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule, MatRadioModule, MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SigninModule} from '../signin/signin.module';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {FilterPipe, GroupByPipe, GroupByPipeObj, OrderPipe} from '../../md/md-table/md-table-base/table-pipe.pipe';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageComponent} from '../language/language.component';
import {MdModule} from '../../md/md.module';
import {NgPipesModule} from 'angular-pipes';
import {FormCustomModule} from '../form-custom/form-custom.module';
import {SportModule} from '../sport/sport.module';
import {SelectYearComponent} from '../form-custom/select-year/select-year.component';
import {SportSelectComponent} from '../sport/sport-select/sport-select.component';

@NgModule({
  declarations: [InsertAthleteDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SigninModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    TranslateModule,
    MdModule,
    NgPipesModule,
    FormCustomModule,
    SportModule
  ],
  entryComponents: [InsertAthleteDialogComponent, SelectYearComponent, SportSelectComponent ],
  providers: [DatePipe, FilterPipe, OrderPipe, GroupByPipe, GroupByPipeObj, OrderPipe]
})
export class AthleteModule { }
