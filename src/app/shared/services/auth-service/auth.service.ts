import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthModel } from 'src/app/shared/models/auth-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  async login(credentials: AuthModel ): Promise<any> {
    return this.http.post('http://localhost:8083/login', credentials)
      .toPromise()
      .then(response => response)
  }

  getUserProfile(): string {
    return sessionStorage.getItem("name") || ""
  }
}