import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private loggedIn = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`);
  }

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
