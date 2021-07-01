import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private readonly http: HttpClient
  ) { }

  execute(data: any, id: string): Observable<any> {
    return this.http.post(`http://localhost:8083/purchase?customerId=${id}`, data)
      .pipe(
        map((response: any) => response)
      );
  }

  getHistory(id: string, page: number): Observable<any> {
    return this.http.get(`http://localhost:8083/purchases/${id}?page=${page-1}&size=5`)
      .pipe(
        map((response: any) => response)
      );
  }
  
}
