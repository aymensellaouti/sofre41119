import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const API_LOGIN = 'http://172.16.144.70:3000/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  login(credentials): Observable<any> {
    return this.http.post<any>(API_LOGIN, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
