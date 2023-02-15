import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match.component';
import { RouterModule } from '@angular/router';
import { NewsRoutes } from './match.routing';
import { FormsModule} from '@angular/forms';
import {FormCustomModule} from '../shared/form-custom/form-custom.module';
import {SelectYearComponent} from '../shared/form-custom/select-year/select-year.component';
import {SportSelectComponent} from '../shared/sport/sport-select/sport-select.component';
import {SportModule} from '../shared/sport/sport.module';

@NgModule({
  declarations: [MatchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(NewsRoutes),
    FormsModule,
    FormCustomModule,
    SportModule
  ],
  entryComponents: [SelectYearComponent, SportSelectComponent ]

})
export class MatchModule { }
