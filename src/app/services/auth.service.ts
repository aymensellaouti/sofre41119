import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const API_LOGIN = 'http://172.16.144.70:3000/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(credentials) {
    return this.http.post(API_LOGIN, credentials);
  }
}
