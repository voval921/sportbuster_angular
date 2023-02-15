import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomizeComponent } from './customize/customize.component';
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import { NewsContentComponent } from './news-content/news-content.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'news',
        component: NewsContentComponent,
      },
      {
        path: 'reset_password',
        component: ResetPasswordComponent,
      },
      {
        path: 'customize',
        component: CustomizeComponent,
      },
    ]
  }
];
