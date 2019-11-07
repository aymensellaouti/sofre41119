import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';
import {timeout} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const API_PATH = 'http://172.16.144.70:3000/api/personnes';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  fakeData: Personne[];
  constructor(
    private http: HttpClient
  ) {
    this.fakeData = [
      new Personne(1, 'sellaouti', 'aymen', 37, 7777, 'Teacher', 'as.jpg'),
      new Personne(2, 'sellaouti', 'skander', 1, 88888, 'kid', ''),
      new Personne(2, 'sellaouti', 'skander', 1, 88888, 'kid', '     '),
    ];
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_PATH);
  }
  getFakeData(): Personne[] {
    return  this.fakeData;
  }
  findPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(API_PATH + `/${id}`);
  }
  deletePersonneById(id): Observable<any> {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   const headers = new HttpHeaders().set('Authorization', token);
    //   return this.http.delete<any>(API_PATH + `/${id}`, {headers});
    // }
    return this.http.delete<any>(API_PATH + `/${id}`);
  }
}
