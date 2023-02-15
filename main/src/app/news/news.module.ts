import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule } from "@angular/router";
import { NewsRoutes } from "./news.routing";
import { FormsModule } from "@angular/forms";
import { NewsdialogComponent } from './newsdialog/newsdialog.component';
import { MatDialogModule } from '@angular/material';
import { NgMarqueeModule } from 'ng-marquee';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [NewsComponent, NewsdialogComponent],
  exports: [
    NewsComponent, NewsdialogComponent
  ],
  imports: [
    CommonModule,
    NgMarqueeModule,
    DragDropModule,
    MatDialogModule,
    RouterModule.forChild(NewsRoutes),
    FormsModule
  ],
  entryComponents: [NewsdialogComponent],
})
export class NewsModule { }
