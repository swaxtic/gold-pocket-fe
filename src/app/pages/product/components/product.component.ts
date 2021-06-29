import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PocketModel } from 'src/app/shared/models/pocket.model';
import { ProductModel } from 'src/app/shared/models/product.model';
import { PocketService } from 'src/app/shared/services/pocket-service/pocket.service';
import { ProductService } from 'src/app/shared/services/product-service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductModel = {
    id: '',
    productImage: '',
    productName: '',
    productPriceBuy: 0,
    productPriceSell: 0,
    productStatus: 0,
    updatedAt: new Date,
    createdAt: new Date,
    productHistories: [{
      id: '',
      historyDate: new Date,
      priceBuy: 0,
      priceSell: 0
    }]
  };
  pockets: PocketModel[] = [{
    id: '',
    pocketName: '',
    pocketQty: 0,
    product: this.product,
    customer: {
      id: sessionStorage.getItem('user-id'),
    }
  }];

  totalQty: number = 0;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly pocketService: PocketService
    // private readonly router: Route
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  private loadProduct() {
    const userId = sessionStorage.getItem('user-id');
    this.activatedRoute.params
      .subscribe((pathVariable: Params) => {
        this.productService.getData(pathVariable.productId)
          .subscribe(
            (response => {
              this.product = response;
              this.loadPocket(userId, this.product.productName);
            })
          );
      });
  }

  private loadPocket(userId: string | null, productName: string) {
    this.pocketService.getData(userId || '')
      .subscribe(
        (response => {
          this.totalQty = 0;
          this.pockets = response;
          this.pockets = this.pockets.filter(product => product.product.productName == productName);
          this.pockets.forEach((pocket) => this.totalQty+=pocket.pocketQty)
        })
      );
  }

}
