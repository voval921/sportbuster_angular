import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FantaComponent } from './fanta.component';
import { RouterModule } from "@angular/router";
import { FantaRoutes } from "./fanta.routing";
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [FantaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FantaRoutes),
    FormsModule
  ]
})
export class FantaModule { }

