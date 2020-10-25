import { Component } from '@angular/core';
import { BorrowingService } from './../borrowing.service';

@Component({
  selector: 'app-updateborrowing',
  templateUrl: './updateborrowing.component.html',
  styleUrls: ['./updateborrowing.component.scss']
})
export class UpdateborrowingComponent {
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
    this.borrowingService.getAllZaduzenja().subscribe(
      data => {
        this.zaduzenja = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getRezervacije = () => {
    this.borrowingService.getAllRezervacije().subscribe(
      data => {
        this.rezervacije = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  zaduzenjeClicked = (zaduzenje) => {
    this.borrowingService.getOneZaduzenje(zaduzenje.id).subscribe(
      data => {
        this.selectedZaduzenje = data;
        this.deleteZaduzenje();
      },
      error => {
        console.log(error);
      }
    );

  }

  rezervacijaClicked = (rezervacija) => {
    this.borrowingService.getOneRezervacija(rezervacija.id).subscribe(
      data => {
        this.selectedRezervacija = data;
        this.deleteRezervacija();
      },
      error => {
        console.log(error);
      }
    );

  }

  registerZaduzenje = () => {
    this.borrowingService.registerNewZaduzenje(this.selectedZaduzenje).subscribe(
      data => {
        this.zaduzenja.push(data);
        alert('Zaduženje sa id-jem korisnika:  ' + this.selectedZaduzenje.id_clana + ' i inventarnim brojem primerka: ' + this.selectedZaduzenje.inv_broj + ' je uspešno kreirano.')
      },
      error => console.log('Došlo je do greške prilikom kreiranja zaduženja.', error)
    );
  }

  registerRezervacija = () => {
    this.selectedRezervacija.datum_rezervacije = Date.now();
    this.borrowingService.registerNewRezervacija(this.selectedRezervacija).subscribe(
      data => {
        this.rezervacije.push(data);
        alert('Rezervacija sa id-jem korisnika:  ' + this.selectedRezervacija.id_clana + ' i id-jem knjige: ' + this.selectedRezervacija.id_knjige + ' je uspešno kreirana.')
      },
      error => console.log('Došlo je do greške prilikom kreiranja zaduženja.', error)
    );
  }

  deleteZaduzenje = () => {
    this.borrowingService.deleteZaduzenje(this.selectedZaduzenje.id).subscribe(
      _data => {
        this.getZaduzenja();
        alert('Zaduženje sa id-jem korisnika:  ' + this.selectedZaduzenje.id_clana + ' i inventarnim brojem primerka: ' + this.selectedZaduzenje.inv_broj + ' je uspešno uklonjeno.')
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteRezervacija = () => {
    this.borrowingService.izbrisiRezervaciju(this.selectedRezervacija.id).subscribe(
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
