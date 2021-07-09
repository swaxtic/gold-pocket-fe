import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthModel } from 'src/app/shared/models/auth-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = "http://localhost:8080"

  constructor(
    private readonly http: HttpClient
  ) { }

  login(credentials: AuthModel ): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login`, credentials)
      .pipe(
        map((response: any) => response)
      );
  }

  getUserProfile(): string {
    return sessionStorage.getItem("name") || ""
  }
  
}