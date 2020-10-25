import { Component } from '@angular/core';
import { NewsService } from './../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  selectedNews;
  dogadjajs = [{ opis: 'Test' }];
  constructor(private newsService: NewsService) {
    this.getNews();
    this.selectedNews = {
      id: -1, img: '', opis: '', datum: ''
    };
  }

  getNews = () => {
    this.newsService.getAllNews().subscribe(
      data => {
        this.dogadjajs = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  dogadjajClicked = (dogadjaj) => {
    this.newsService.getOneNews(dogadjaj.id).subscribe(
      data => {
        this.selectedNews = data;
      },
      error => {
        console.log(error);
      }
    );

  }
}

