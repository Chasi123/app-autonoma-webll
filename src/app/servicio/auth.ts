import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/interface/interfaceUsuarios';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
   private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}`);
  }
}