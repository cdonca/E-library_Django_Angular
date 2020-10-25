import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowingService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token ' + localStorage.getItem('token') });

  constructor(private http: HttpClient) { }

  getAllZaduzenja(): Observable<any> {
    return this.http.get(this.baseurl + '/zaduzenjes/', { headers: this.httpHeaders });
  }

  getAllZaduzenjaClana(): Observable<any> {
    return this.http.get(this.baseurl + '/zaduzenjesclan/');
  }

  getAllRezervacije(): Observable<any> {
    return this.http.get(this.baseurl + '/rezervacija/', { headers: this.httpHeaders });
  }

  getAllRezervacijeClana(): Observable<any> {
    return this.http.get(this.baseurl + '/rezervacijaclan/');
  }

  getOneZaduzenje(id): Observable<any> {
    return this.http.get(this.baseurl + '/zaduzenjes/' + id + '/', { headers: this.httpHeaders });
  }

  getOneRezervacija(id): Observable<any> {
    return this.http.get(this.baseurl + '/rezervacija/' + id + '/', { headers: this.httpHeaders });
  }

  getOneRezervacijaClana(id): Observable<any> {
    return this.http.get(this.baseurl + '/rezervacijaclan/' + id + '/');
  }

  registerNewZaduzenje(zaduzenje): Observable<any> {
    const body = {
      id: zaduzenje.id, datum_zaduzenja: zaduzenje.datum_zaduzenja, datum_vracanja: zaduzenje.datum_vracanja,
      inv_broj: zaduzenje.inv_broj, id_clana: zaduzenje.id_clana
    };
    return this.http.post(this.baseurl + '/zaduzenjes/', body, { headers: this.httpHeaders });
  }

  deleteZaduzenje(id): Observable<any> {
    return this.http.delete(this.baseurl + '/zaduzenjes/' + id + '/', { headers: this.httpHeaders });
  }

  izbrisiRezervaciju(id): Observable<any> {
    return this.http.delete(this.baseurl + '/rezervacija/' + id + '/', { headers: this.httpHeaders });
  }

  izbrisiRezervacijuClana(id): Observable<any> {
    return this.http.delete(this.baseurl + '/rezervacijaclan/' + id + '/', { headers: this.httpHeaders });
  }

  registerNewRezervacija(rezervacija): Observable<any> {
    const body = {
      id: rezervacija.id, datum_zaduzenja: rezervacija.datum_rezervacije, id_knjige: rezervacija.id_knjige, id_clana: rezervacija.id_clana
    };
    return this.http.post(this.baseurl + '/rezervacija/', body, { headers: this.httpHeaders });
  }
}
