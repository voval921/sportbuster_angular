import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { TranslateModule } from "@ngx-translate/core";
import { FantaComponent } from '../fanta/fanta.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ResultsModule } from '../results/results.module';
import { ProfileComponent } from './profile/profile.component';
import { CustomizeComponent } from './customize/customize.component';
import { SportModule } from '../shared/sport/sport.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewsModule } from '../news/news.module';
import { NewsContentComponent } from './news-content/news-content.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MdModule,
        NewsModule,
        MaterialModule,
        TranslateModule,
        ResultsModule,
        SidebarModule,
        SportModule,
        DragDropModule,
        InfiniteScrollModule,
        NgxLoadingModule
    ],
    declarations: [
        DashboardComponent,
        FantaComponent,
        ProfileComponent,
        CustomizeComponent,
        ResetPasswordComponent,
        NewsContentComponent,
    ],
    entryComponents: [ ],
})

export class DashboardModule { }
