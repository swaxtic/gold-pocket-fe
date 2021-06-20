import { Injectable } from '@angular/core';
import { AuthModel } from '../models/auth-model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async saveAuth(data: AuthModel): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(data){
          sessionStorage.setItem('username', data.username);
          sessionStorage.setItem('password', data.password);
          resolve();
        }else{
          reject();
        }
      }, 2000);
    })
  }

  getData(): void {

  }
}
