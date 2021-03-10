import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  signin(email: string, password: string): Observable<any> {
    return this.http.post(this.URL, {
      email,
      password,
    });
  }
  signup(email: string, password: string): Observable<any> {
    return this.http.post(this.URL, {
      email,
      password,
    });
  }
}
