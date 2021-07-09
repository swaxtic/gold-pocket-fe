import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL = "http://localhost:8080"

  constructor(
    private readonly http: HttpClient
  ) { }

  getData(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/product/${id}`)
      .pipe(
        map((response: any) => response)
      );
  }

  getHistoriesData(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/product/${id}/history`)
      .pipe(
        map((response: any) => response)
      );
  }
  
}
