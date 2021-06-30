import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private readonly http: HttpClient
  ) { }

  async execute(data: any, id: string): Promise<any> {
    return this.http.post(`http://localhost:8083/purchase?customerId=${id}`, data)
      .toPromise()
      .then((response: any) => response);
  }

  async getHistory(id: string, page: number): Promise<any> {
    return this.http.get(`http://localhost:8083/purchases/${id}?page=${page-1}&size=5`)
      .toPromise()
      .then((response: any) => response);
  }
  
}
