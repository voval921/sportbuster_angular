import { Routes } from '@angular/router';

import { ResultsComponent} from "./results.component";

export const ResultsRoutes: Routes = [
  {

    path: '',
    children: [ {
      path: '',
      component: ResultsComponent
    }]
  }
];
