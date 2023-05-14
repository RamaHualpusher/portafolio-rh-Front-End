// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly credentialsKey = 'basic_credentials';
  private _isLoggedIn = new BehaviorSubject<boolean>(this.hasCredentials());

  constructor(private http: HttpClient) {}

  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    const credentials = btoa(`${username}:${password}`);
    localStorage.setItem(this.credentialsKey, credentials);

    const user = { username, password };
    return this.http.post('http://localhost:8080/api/user/login', user).pipe(
      tap(() => this._isLoggedIn.next(true)),
      catchError((error) => {
        localStorage.removeItem(this.credentialsKey);
        this._isLoggedIn.next(false);
        throw error;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.credentialsKey);
    this._isLoggedIn.next(false);
  }

  private hasCredentials(): boolean {
    const credentials = localStorage.getItem(this.credentialsKey);
    return credentials != null;
  }
}
