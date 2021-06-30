import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PurchaseHistoryDetailResponse, PurchaseHistoryResponse } from 'src/app/shared/models/purchase.model';
import { TransactionService } from 'src/app/shared/services/transaction-service/transaction.service';

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.scss']
})
export class UserTransactionsComponent implements OnInit {


  purchaseHistories: PurchaseHistoryResponse[] = [];
  detailSelector: number = 0;
  page: number = 0;
  totalPages: number = 0;

  constructor(
    private readonly transactionService: TransactionService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.loadHistories();
  }

  loadHistories(): void {
    const userId = sessionStorage.getItem('user-id');
    this.activatedRoute.queryParams
      .subscribe((queryParams: Params) => {
        this.page = queryParams.page || 1;
        this.transactionService.getHistory(userId || '', this.page)
          .subscribe((response) =>{
            this.purchaseHistories = response.content;
            this.totalPages = response.totalPages;
            console.log(this.totalPages);
          },err => console.log(err))
      })
  }

  countTotalQty(index: number): number {
    let total = 0;
    this.purchaseHistories[index].purchaseDetails.forEach(result => {
      total+= Math.round(result.quantityInGram * 1e2) / 1e2
    })
    return total;
  }
  getProductPrice(index: number): number {
    let total = 0;
    this.purchaseHistories[index].purchaseDetails.forEach(result => {
      total+=result.price
    })
    return total;
  }

  getDetail(index: number): PurchaseHistoryDetailResponse[] {
    return this.purchaseHistories[index].purchaseDetails;
  }

  openModalDetail(index: number): void {
    this.detailSelector = index;
  }

  pageChanged(page: number): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: page === 0 ? null : page,
      },
      queryParamsHandling: 'merge',
    });
  }
  createRange(number: number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

}
