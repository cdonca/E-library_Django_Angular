import { Component } from '@angular/core';
import { BorrowingService } from '../borrowing.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  selectedRezervacija;
  rezervacije = [{ id_clana: 'Test' }];
  selectedBook;
  rola;
  constructor(private borrowingService: BorrowingService) {
    this.rola = null;
    this.selectedBook = {
      id: -1, autor: '', broj_primeraka: '', broj_strana: '', godina_izdanja: '', izdavac: '', naziv: '', pismo: '', vrsta_poveza: '', zanr: '', img: ''
    };
    this.selectedRezervacija = {
      id: -1, datum_rezervacije: '', id_clana: '', id_knjige: ''
    };
    this.selectedBook.id = localStorage.getItem('id');
    this.selectedBook.naziv = localStorage.getItem('naziv');
    this.selectedBook.autor = localStorage.getItem('autor');
    this.selectedBook.broj_primeraka = localStorage.getItem('broj_primeraka');
    this.selectedBook.broj_strana = localStorage.getItem('broj_strana');
    this.selectedBook.godina_izdanja = localStorage.getItem('godina_izdanja');
    this.selectedBook.izdavac = localStorage.getItem('izdavac');
    this.selectedBook.pismo = localStorage.getItem('pismo');
    this.selectedBook.zanr = localStorage.getItem('zanr');
    this.selectedBook.vrsta_poveza = localStorage.getItem('vrsta_poveza');
    this.selectedBook.img = localStorage.getItem('img');
  }

  removeItems() {
    this.selectedBook.id = null;
    this.selectedBook.naziv = null;
    this.selectedBook.autor = null;
    this.selectedBook.broj_primeraka = null;
    this.selectedBook.broj_strana = null;
    this.selectedBook.godina_izdanja = null;
    this.selectedBook.izdavac = null;
    this.selectedBook.pismo = null;
    this.selectedBook.zanr = null;
    this.selectedBook.vrsta_poveza = null;
    this.selectedBook.img = null;
  }
  
  rezervacija = () => {
    this.selectedRezervacija.id_knjige = localStorage.getItem('id');
    this.selectedRezervacija.id_clana = localStorage.getItem('id_clana');
    this.rola = localStorage.getItem('rola');
    this.selectedRezervacija.datum_rezervacije = Date.now();
    if (this.selectedRezervacija.id_clana != '' && this.rola == 'clan') {
      this.borrowingService.registerNewRezervacija(this.selectedRezervacija).subscribe(
        data => {
          this.rezervacije.push(data);
          alert('Rezervacija sa id-jem korisnika:  ' + this.selectedRezervacija.id_clana + ' i id-jem knjige: ' + this.selectedRezervacija.id_knjige + ' je uspešno kreirana.')
        },
        error => console.log('Došlo je do greške prilikom kreiranja rezervacije.', error)
      );
    } else
      alert('Nije moguće rezervisati knjigu ako niste ulogovani kao član.');
  }
}
