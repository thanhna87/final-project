import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  //goi API get token
  getDataLogin(credentials: { username: ''; password: '' }) {
    return this.httpClient.post<any>(
      'https://fakestoreapi.com/auth/login',
      credentials
    );
  }
}
