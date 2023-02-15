import { Routes } from '@angular/router';
import {MatchComponent} from './match.component';


export const NewsRoutes: Routes = [
  {

    path: '',
    children: [ {
      path: '',
      component: MatchComponent
    }]
  }
];
