import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('token') });
  primerci = [{ inv_broj: 1 }];
  knjigas = [{ naziv: 'Test' }];
  selectedBook;
  primerak;

  constructor(private api: ApiService, private http: HttpClient) {
    this.getKnjigas();
    this.selectedBook = {
      id: -1, autor: '', broj_primeraka: '', broj_strana: '', godina_izdanja: '', izdavac: '', naziv: '', pismo: '', vrsta_poveza: '', zanr: '', img: File
    };
    this.primerak = {
      id: -1, inv_broj: 73, id_knjige: ''
    };
  }
  getKnjigas = () => {
    this.api.getAllKnjigas().subscribe(
      data => {
        this.knjigas = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  knjigaClicked = (knjiga) => {
    this.api.getOneKnjiga(knjiga.id).subscribe(
      data => {
        this.selectedBook = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onImageChanged(event) {
    this.selectedBook.img = event.target.files[0];
    console.log(event.target.files[0]);
  }

  handleNazivInput(event) {
    this.selectedBook.naziv = event.target.value;
  }

  handleAutorInput(event) {
    this.selectedBook.autor = event.target.value;
  }

  handleIzdavacInput(event) {
    this.selectedBook.izdavac = event.target.value;
  }

  handleZanrInput(event) {
    this.selectedBook.zanr = event.target.value;
  }

  handleGodIzdInput(event) {
    this.selectedBook.godina_izdanja = event.target.value;
  }

  handleBrPrInput(event) {
    this.selectedBook.broj_primeraka = event.target.value;
  }

  handleBrStrInput(event) {
    this.selectedBook.broj_strana = event.target.value;
  }

  handlePismoInput(event) {
    this.selectedBook.pismo = event.target.value;
  }

  handleVrstaPovezaInput(event) {
    this.selectedBook.vrsta_poveza = event.target.value;
  }

  dodajKnjigu() {
    const uploadPic = new FormData();
    uploadPic.append('naziv', this.selectedBook.naziv);
    uploadPic.append('autor', this.selectedBook.autor);
    uploadPic.append('izdavac', this.selectedBook.izdavac);
    uploadPic.append('zanr', this.selectedBook.zanr);
    uploadPic.append('pismo', this.selectedBook.pismo);
    uploadPic.append('godina_izdanja', this.selectedBook.godina_izdanja);
    uploadPic.append('broj_primeraka', this.selectedBook.broj_primeraka);
    uploadPic.append('broj_strana', this.selectedBook.broj_strana);
    uploadPic.append('vrsta_poveza', this.selectedBook.vrsta_poveza);
    uploadPic.append('img', this.selectedBook.img, this.selectedBook.img.name);
    this.http.post(this.baseurl + '/knjigas/', uploadPic, { headers: this.httpHeaders }).subscribe(
      data => {
        console.log(data);
        this.getKnjigas();
        alert('Knjiga ' + this.selectedBook.naziv + ' je uspešno dodata.')
      },
      error => console.log(error)
    );
  }

  azurirajKnjigu() {
    const uploadPic = new FormData();
    uploadPic.append('naziv', this.selectedBook.naziv);
    uploadPic.append('autor', this.selectedBook.autor);
    uploadPic.append('izdavac', this.selectedBook.izdavac);
    uploadPic.append('zanr', this.selectedBook.zanr);
    uploadPic.append('pismo', this.selectedBook.pismo);
    uploadPic.append('godina_izdanja', this.selectedBook.godina_izdanja);
    uploadPic.append('broj_primeraka', this.selectedBook.broj_primeraka);
    uploadPic.append('broj_strana', this.selectedBook.broj_strana);
    uploadPic.append('vrsta_poveza', this.selectedBook.vrsta_poveza);
    uploadPic.append('img', this.selectedBook.img, this.selectedBook.img.name);
    this.http.put(this.baseurl + '/knjigas/' + this.selectedBook.id + '/', uploadPic, { headers: this.httpHeaders }).subscribe(
      data => {
        console.log(data);
        this.getKnjigas();
        alert('Knjiga ' + this.selectedBook.naziv + ' je uspešno ažurirana.')
      },
      error => console.log(error)
    );
  }

  registerPrimerak = () => {
    this.primerak.id_knjige = this.selectedBook.id + 1;
    for (let i = 0; i < this.selectedBook.broj_primeraka; i++) {
      this.api.registerNewPrimerak(this.primerak).subscribe(
        data => {
          this.primerci.push(data);
        },
        error => console.log('Došlo je do greške prilikom kreiranja primeraka.', error)
      );
      this.primerak.inv_broj = this.primerak.inv_broj + 1;
    }
    alert('Sva ' + this.selectedBook.broj_primeraka + ' primerka su uspešno dodata.')
  }

  deleteKnjiga = () => {
    this.api.deleteKnjiga(this.selectedBook.id).subscribe(
      _data => {
        this.getKnjigas();
        alert('Knjiga ' + this.selectedBook.naziv + ' je uspešno izbrisana.')
      },
      error => {
        console.log(error);
      }
    );
  }
}
