import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updatenews',
  templateUrl: './updatenews.component.html',
  styleUrls: ['./updatenews.component.scss']
})
export class UpdatenewsComponent {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('token') });
  selectedNews;
  dogadjajs = [{ opis: 'Test' }];
  constructor(private http: HttpClient, private newsService: NewsService) {
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

  handleFileInput(event) {
    this.selectedNews.img = event.target.files[0];
  }

  handleOpisInput(event) {
    this.selectedNews.opis = event.target.value;
  }

  handleDatumInput(event) {
    this.selectedNews.datum = event.target.value;
  }

  addDogadjaj() {
    const uploadPic = new FormData();
    uploadPic.append('datum', this.selectedNews.datum);
    uploadPic.append('opis', this.selectedNews.opis);
    uploadPic.append('img', this.selectedNews.img, this.selectedNews.img.name);
    this.http.post(this.baseurl + '/dogadjajs/', uploadPic, { headers: this.httpHeaders }).subscribe(
      data => {
        console.log(data);
        this.getNews();
        alert('Događaj ' + this.selectedNews.opis + ' je uspešno dodat.')
      },
      error => console.log(error)
    );
  }

  updateDogadjaj() {
    const uploadPic = new FormData();
    uploadPic.append('datum', this.selectedNews.datum);
    uploadPic.append('opis', this.selectedNews.opis);
    uploadPic.append('img', this.selectedNews.img, this.selectedNews.img.name);
    this.http.put(this.baseurl + '/dogadjajs/' + this.selectedNews.id + '/', uploadPic, { headers: this.httpHeaders }).subscribe(
      data => {
        console.log(data);
        this.getNews();
        alert('Događaj ' + this.selectedNews.opis + ' je uspešno izmenjen.')
      },
      error => console.log(error)
    );
  }

  deleteDogadjaj = () => {
    this.newsService.deleteNews(this.selectedNews.id).subscribe(
      _data => {
        this.getNews();
        alert('Događaj ' + this.selectedNews.opis + ' je uspešno izbrisan.')
      },
      error => {
        console.log(error);
      }
    );
  }
}
