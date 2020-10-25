import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token ' + localStorage.getItem('token') });

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<any> {
    return this.http.get(this.baseurl + '/dogadjajs/');
  }

  getOneNews(id): Observable<any> {
    return this.http.get(this.baseurl + '/dogadjajs/' + id + '/');
  }

  deleteNews(id): Observable<any> {
    return this.http.delete(this.baseurl + '/dogadjajs/' + id + '/', { headers: this.httpHeaders });
  }
}
