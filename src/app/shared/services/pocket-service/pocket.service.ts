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

  getData(customerId: string): Observable<any> {
    return this.http.get(`http://localhost:8083/customer/${customerId}/pockets`)
      .pipe(
        map((response: any) => response)
      );
  }

  addPocket(data: PocketModelRequest): Observable<any> {
    return this.http.post(`http://localhost:8083/pocket`, data)
      .pipe(
        map((response: any) => response)
      );
  }

  editPocket(data: PocketModelRequest): Observable<any> {
    return this.http.put(`http://localhost:8083/pocket`, data)
      .pipe(
        map((response: any) => response)
      );
  }

  deletePocket(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8083/pocket/${id}`)
      .pipe(
        map((response: any) => response)
      );
  }

}
