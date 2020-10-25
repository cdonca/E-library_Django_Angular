import { Component} from '@angular/core';
import { GalleryService } from './../gallery.service'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Authorization': 'Token ' + localStorage.getItem("token") });
  selectedPic;
  slikas = [{ opis: 'Test' }];
  constructor(private http: HttpClient, private galleryService: GalleryService) {
    this.getPics();
    this.selectedPic = {
      id: -1, img: File, opis: ''
    };
  }

  getPics = () => {
    this.galleryService.getAllPics().subscribe(
      data => {
        this.slikas = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
