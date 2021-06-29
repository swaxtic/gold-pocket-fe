import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { AuthModel } from 'src/app/shared/models/auth-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly http: HttpClient
  ) { }

  login(credentials: AuthModel ): Observable<any> {
    return this.http.post('http://localhost:8083/login', credentials)
      .pipe(
        retry(3),
        map((response: any) => response)
      );
  }

  // async saveAuth(data: AuthModel): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if(data){
  //         sessionStorage.setItem('username', data.username);
  //         sessionStorage.setItem('password', data.password);
  //         resolve();
  //       }else{
  //         reject();
  //       }
  //     }, 2000);
  //   })
  // }


  // login(data: AuthModel): Observable<any> {
  //   return this.http.post('http://localhost:8083/login', data)
  //     .pipe(
  //       retry(3),
  //       map((response: any) => console.log(response))
  //     )

  // }
}