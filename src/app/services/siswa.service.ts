import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Siswa } from '../models/siswa.model';

const baseUrl = 'http://localhost:8080/api/siswa';

@Injectable({
  providedIn: 'root'
})
export class SiswaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Siswa[]> {
    return this.http.get<Siswa[]>(baseUrl);
  }

  get(id: any): Observable<Siswa> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(nama: any): Observable<Siswa[]> {
    return this.http.get<Siswa[]>(`${baseUrl}?nama=${nama}`);
  }
}
