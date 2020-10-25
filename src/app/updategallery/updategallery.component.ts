import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-updategallery',
  templateUrl: './updategallery.component.html',
  styleUrls: ['./updategallery.component.scss']
})
export class UpdategalleryComponent{
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('token') });
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

  slikaClicked = (slika) => {
    this.galleryService.getOnePic(slika.id).subscribe(
      data => {
        this.selectedPic = data;
      },
      error => {
        console.log(error);
      }
    );

  }

  handleFileInput(event) {
    this.selectedPic.img = event.target.files[0];
  }

  handleOpisInput(event) {
    this.selectedPic.opis = event.target.value;
  }

  dodajSliku() {
    const uploadPic = new FormData();
    uploadPic.append('opis', this.selectedPic.opis);
    uploadPic.append('img', this.selectedPic.img, this.selectedPic.img.name);
    this.http.post(this.baseurl + '/slikas/', uploadPic, { headers: this.httpHeaders }).subscribe(
      data => {
        console.log(data);
        this.getPics();
        alert('Slika ' + this.selectedPic.img.name + ' je uspešno dodata.')
      },
      error => console.log(error)
    );
  }

  izbrisiSliku = () => {
    this.galleryService.deletePic(this.selectedPic.id).subscribe(
      _data => {
        this.getPics();
        alert('Slika ' + this.selectedPic.img.name + ' je uspešno izbrisana.')
      },
      error => {
        console.log(error);
      }
    );
  }
}
