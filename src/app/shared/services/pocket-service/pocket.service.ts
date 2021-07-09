import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PocketModelRequest } from '../../models/pocket.model';

@Injectable({
  providedIn: 'root'
})
export class PocketService {

  BASE_URL = "http://localhost:8080"

  constructor(
    private readonly http: HttpClient
  ) { }

  getData(customerId: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/customer/${customerId}/pockets`)
      .pipe(
        map((response: any) => response)
      );
  }

  addPocket(data: PocketModelRequest): Observable<any> {
    return this.http.post(`${this.BASE_URL}/pocket`, data)
      .pipe(
        map((response: any) => response)
      );
  }

  editPocket(data: PocketModelRequest): Observable<any> {
    return this.http.put(`${this.BASE_URL}/pocket`, data)
      .pipe(
        map((response: any) => response)
      );
  }

  deletePocket(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/pocket/${id}`)
      .pipe(
        map((response: any) => response)
      );
  }

}
