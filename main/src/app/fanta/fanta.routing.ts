import { Routes } from '@angular/router';

import { FantaComponent } from "./fanta.component";

export const FantaRoutes: Routes = [
  {

    path: '',
    children: [ {
      path: '',
      component: FantaComponent
    }]
  }
];
