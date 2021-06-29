import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthModel } from 'src/app/shared/models/auth-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  login(credentials: AuthModel ): Observable<any> {
    return this.http.post('http://localhost:8083/login', credentials)
      .pipe(
        map((response: any) => response)
      );
  }

  getUserProfile(): string {
    return sessionStorage.getItem("name") || ""
  }

  // login(data: AuthModel): Observable<any> {
  //   return this.http.post('http://localhost:8083/login', data)
  //     .pipe(
  //       retry(3),
  //       map((response: any) => console.log(response))
  //     )

  // }
}