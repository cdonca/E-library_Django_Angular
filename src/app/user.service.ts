import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token ' + localStorage.getItem('token') });

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + '/users/', { headers: this.httpHeaders });
  }

  getOneUser(id): Observable<any> {
    return this.http.get(this.baseurl + '/users/' + id + '/', { headers: this.httpHeaders });
  }

  registerNewUser(korisnik): Observable<any> {
    const body = {
      id: korisnik.id, username: korisnik.username, password: korisnik.password, ime: korisnik.ime,
      prezime: korisnik.prezime, email: korisnik.email, rola: korisnik.rola
    };
    return this.http.post(this.baseurl + '/users/', body, { headers: this.httpHeaders });
  }

  loginUser(userData): Observable<any> {
    return this.http.post(this.baseurl + '/auth/', userData);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(this.baseurl + '/users/' + id + '/', { headers: this.httpHeaders });
  }
}
