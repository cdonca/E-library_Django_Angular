import { Component } from '@angular/core';
import { BorrowingService } from '../borrowing.service';

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.scss']
})
export class BorrowingComponent {
  selectedZaduzenje;
  selectedRezervacija;
  rezervacije = [{ id_knjige: 'Test' }];
  zaduzenja = [{ id_clana: 'Test' }];
  constructor(private borrowingService: BorrowingService) {
    this.getRezervacije();
    this.getZaduzenja();
    this.selectedZaduzenje = {
      id: -1, datum_zaduzenja: '', datum_vracanja: '', inv_broj: '', id_clana: ''
    };
    this.selectedRezervacija = {
      id: -1, datum_rezervacije: '', id_knjige: '', id_clana: ''
    };
  }

  getZaduzenja = () => {
    this.borrowingService.getAllZaduzenjaClana().subscribe(
      data => {
        this.zaduzenja = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getRezervacije = () => {
    this.borrowingService.getAllRezervacijeClana().subscribe(
      data => {
        this.rezervacije = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  rezervacijaClicked = (rezervacija) => {
    this.borrowingService.getOneRezervacijaClana(rezervacija.id).subscribe(
      data => {
        this.selectedRezervacija = data;
        this.deleteRezervacija();
      },
      error => {
        console.log(error);
      }
    );

  }

  deleteRezervacija = () => {
    this.borrowingService.izbrisiRezervacijuClana(this.selectedRezervacija.id).subscribe(
      _data => {
        this.getRezervacije();
        alert('Rezervacija sa id-jem korisnika:  ' + this.selectedRezervacija.id_clana + ' i id-jem knjige: ' + this.selectedRezervacija.id_knjige + ' je uspešno uklonjena.')
      },
      error => {
        console.log(error);
      }
    );
  }
}
