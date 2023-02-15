import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/_service/news/news.service';
import { MatDialog } from '@angular/material';
import { NewsdialogComponent } from "../../news/newsdialog/newsdialog.component";

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  news = [];
  adding: object;
  newsdata: object;
  firstNews: object;
  addContent: number;
  page: number = 0;
  size: number = 9;
  loading: boolean = false;

  constructor(
    private newsService: NewsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getNewsContent("0", "9");
  }

  openNews(result: string) {
    this.newsdata = this.news[result];
    this.dialog.open(NewsdialogComponent, {
      panelClass: 'custom-dialog-container',
      data: this.newsdata,
    });
  }

  getNewsContent(page: any, size: any) {
    this.loading = true;
    this.newsService.getNews(page, size).subscribe((response: any) => {
      let content = response.content;
      this.loading = false;
      content.forEach(element => {
        this.news.push(element);
      });
      console.log(this.news);
      this.firstNews = this.news[0];
    },
      error => {

      });
  }

  onScroll() {
    console.log("clicked");
    this.page += 1;
    this.getNewsContent(this.page, this.size);
  }

}
