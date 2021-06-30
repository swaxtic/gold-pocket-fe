import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    private readonly http: HttpClient
  ) { }

  async getData(id: string): Promise<any> {
    return this.http.get(`http://localhost:8083/product/${id}`)
      .toPromise()
      .then((response: any) => response);
  }

  async getHistoriesData(id: string): Promise<any> {
    return this.http.get(`http://localhost:8083/product/${id}/history`)
      .toPromise()
      .then((response: any) => response);
  }
}
