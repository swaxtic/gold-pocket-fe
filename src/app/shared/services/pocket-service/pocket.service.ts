import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PocketModelRequest } from '../../models/pocket.model';

@Injectable({
  providedIn: 'root'
})
export class PocketService {

  constructor(
    private readonly http: HttpClient
  ) { }

  async getData(customerId: string): Promise<any> {
    return this.http.get(`http://localhost:8083/customer/${customerId}/pockets`)
      .toPromise()
      .then((response: any) => response);
  }

  async addPocket(data: PocketModelRequest): Promise<any> {
    return this.http.post(`http://localhost:8083/pocket`, data)
      .toPromise()
      .then((response: any) => response);
  }

  async editPocket(data: PocketModelRequest): Promise<any> {
    return this.http.put(`http://localhost:8083/pocket`, data)
      .toPromise()
      .then((response: any) => response);
  }

  async deletePocket(id: string): Promise<any> {
    return this.http.delete(`http://localhost:8083/pocket/${id}`)
      .toPromise()
      .then((response) => response);
  }

}
