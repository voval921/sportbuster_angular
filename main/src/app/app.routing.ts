import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { NotFoundComponent } from "./error/notfound/notfound.component";
import { WaitingconfirmComponent } from './layouts/waitingconfirm/waitingconfirm.component';
import {WaitingchangepasswordComponent} from "./layouts/waitingchangepassword/waitingchangepassword.component";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'confirm',
        component: WaitingconfirmComponent,
    },
    {
        path: 'change_password',
        component: WaitingchangepasswordComponent,
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'news',
                loadChildren: './news/news.module#NewsModule'
            }, {
                path: 'match',
                loadChildren: './match/match.module#MatchModule'
            }, {
                path: 'results',
                loadChildren: './results/results.module#ResultsModule'
            }, {
                path: 'fanta',
                loadChildren: './fanta/fanta.module#FantaModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            },
        ]
    },
    //error redirect
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    }
];
