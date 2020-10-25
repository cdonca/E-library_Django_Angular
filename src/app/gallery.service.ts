import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token ' + localStorage.getItem('token') });

  constructor(private http: HttpClient) { }

  getAllPics(): Observable<any> {
    return this.http.get(this.baseurl + '/slikas/');
  }

  getOnePic(id): Observable<any> {
    return this.http.get(this.baseurl + '/slikas/' + id + '/');
  }

  deletePic(id): Observable<any> {
    return this.http.delete(this.baseurl + '/slikas/' + id + '/', { headers: this.httpHeaders });
  }
}
