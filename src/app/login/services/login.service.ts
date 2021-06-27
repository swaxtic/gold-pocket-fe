import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly http: HttpClient
  ) { }

  login(credentials: {email: string, password: string} ): Observable<string> {
    return this.http.post('https://reqres.in/api/login', credentials)
      .pipe(
        retry(3),
        map((response: any) => response.token)
      );
  }
}