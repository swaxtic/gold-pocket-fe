import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/shared/services/transaction-service/transaction.service';
import { PurchaseRequestModel } from 'src/app/shared/models/purchase.model';
import { PocketModel } from 'src/app/shared/models/pocket.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-product-transaction',
  templateUrl: './product-transaction.component.html',
  styleUrls: ['./product-transaction.component.scss']
})
export class ProductTransactionComponent implements OnInit {

  loading: boolean = false;

  purchaseData: FormGroup = new FormGroup({
    quantity: new FormControl(0,Validators.required),
    rupiah: new FormControl(''),
    pocket: new FormControl(''),
    type: new FormControl(null)
  });

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

  @Input("pockets")
  pockets: PocketModel[] = [{
    id: '',
    pocketName: '',
    pocketQty: 0,
    product: this.product,
    customer: {
      id: sessionStorage.getItem('user-id'),
    }
  }];
  chartOptions: any;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly transactionService: TransactionService,
  ) {
    this.setChart();
    this.loadProduct();
  }

  private setChart() {
    this.chartOptions = {
      series: [
        {
          name: "Buy",
          data: this.product.productHistories?.map(obj => {
            return obj.priceBuy;
          })
        },
        {
          name: "Sell",
          data: this.product.productHistories?.map(obj => {
            return obj.priceSell;
          })
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      title: {
        text: `${this.product.productName}`
      },
    };
  }

  ngOnInit(): void {
    this.loadProduct()
  }

  submit(type: number): void {
    this.purchaseData.value.type = type;
  }

  private loadProduct() {
    this.activatedRoute.params
      .subscribe((pathVariable: Params) => {
        this.productService.getData(pathVariable.productId)
          .subscribe(
            (response => {
              this.product = response;
              this.setChart()
            })
          );
      });
  }

  checkout(type: number): void {
    this.loading=true;
    let data: PurchaseRequestModel = {
      purchaseType: type,
      purchaseDetails: [
        {
          quantityInGram: this.purchaseData.value.quantity,
          pocket:{ 
              id: this.purchaseData.value.pocket
          } 
        }
      ]
    }
    const userId = sessionStorage.getItem('user-id');
    console.log(data);
    this.transactionService.execute(data, userId || '')
      .subscribe(response => {
          console.log(response);
          window.location.reload()
          this.loading=false;
      }, error => {
        console.log(error);
        this.loading=false;
      });   
    console.log(this.pockets);
     
  }

}
