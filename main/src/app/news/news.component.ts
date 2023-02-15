import { Component, OnInit, Inject } from '@angular/core';
import { NewsService } from '../shared/_service/news/news.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NewsdialogComponent } from './newsdialog/newsdialog.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  news: any[] = [];
  firstTitle: string;
  newsdata: object;
  marquee: boolean;
  availMaquee: boolean = false;

  constructor(
    private newsService: NewsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.marquee = true;
    this.availMaquee = false;
    this.newsService.getNews("0", "6").subscribe((response: any) => {
      this.news = response.content;
      this.firstTitle = response.content[0].title;
      if (this.news.length > 0) {
        this.availMaquee = true;
      }
    })
  }

  openNews(result: string) {
    this.newsdata = this.news[result];
    this.dialog.open(NewsdialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '65vw',
      data: this.newsdata,
    });
  }

  openNews_caro(result: string) {
    this.newsdata = this.news[result];
    this.dialog.open(NewsdialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '65vw',
      data: this.newsdata,
    });
  }

}
