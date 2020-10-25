import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Authorization': 'Token ' + localStorage.getItem('token') });
  constructor(private http: HttpClient) { }

  getAllKnjigas(): Observable<any> {
    return this.http.get(this.baseurl + '/knjigas/');
  }

  getKnjigasZanrIst(): Observable<any> {
    return this.http.get(this.baseurl + '/knjigaszanrist/');
  }

  getKnjigasZanrKom(): Observable<any> {
    return this.http.get(this.baseurl + '/knjigaszanrkom/');
  }

  getKnjigasZanrPub(): Observable<any> {
    return this.http.get(this.baseurl + '/knjigaszanrpub/');
  }

  getKnjigasZanrLjub(): Observable<any> {
    return this.http.get(this.baseurl + '/knjigaszanrljub/');
  }

  getKnjigasZanrKrimi(): Observable<any> {
    return this.http.get(this.baseurl + '/knjigaszanrkrimi/');
  }

  getOneKnjiga(id): Observable<any> {
    return this.http.get(this.baseurl + '/knjigas/' + id + '/');
  }

  deleteKnjiga(id): Observable<any> {
    return this.http.delete(this.baseurl + '/knjigas/' + id + '/', { headers: this.httpHeaders });
  }

  registerNewPrimerak(primerak): Observable<any> {
    const body = {
      id: primerak.id, inv_broj: primerak.inv_broj, id_knjige: primerak.id_knjige
    };
    return this.http.post(this.baseurl + '/primeraks/', body, { headers: this.httpHeaders });
  }
}
