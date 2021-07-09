import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { from, Observable } from 'rxjs';
import { PurchaseRequestModel } from 'src/app/shared/models/purchase.model';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { TransactionService } from 'src/app/shared/services/transaction-service/transaction.service';

import { ProductTransactionComponent } from './product-transaction.component';

//TODO: proxyconf, bikin BASEURL di service

describe('ProductTransactionComponent', () => {
  let component: ProductTransactionComponent;
  let fixture: ComponentFixture<ProductTransactionComponent>;
  let productService: ProductService;
  let transactionService: TransactionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTransactionComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ProductService, TransactionService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    productService = TestBed.inject(ProductService);
    transactionService = TestBed.inject(TransactionService);
    fixture = TestBed.createComponent(ProductTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#LoadProduct()', ()=> {
    const mockProductResponse: any = {
      "id": "ff80808178fdba3a0178fdbbe0b10000",
      "productName": "Platinum",
      "productPriceBuy": 844542,
      "productPriceSell": 859585,
      "productImage": "1.png",
      "productStatus": 1,
    }

    it('should call loadProduct() after ngOninit', () => {
      const spy = spyOn(productService, 'getData').and.callFake((id: string): Observable<any> => {
        return from([mockProductResponse])
      })
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });

    it('should have dataProduct ngOninit', () => {
      spyOn(productService, 'getData').and.callFake((id: string): Observable<any> => {
        return from([mockProductResponse])
      })
      component.ngOnInit();
      expect(component.product).toEqual(mockProductResponse);
      console.log("Product COmponent");
      console.log(component.product);
    });

  });

  describe('#checkout()', ()=> {
    const mockCheckoutResponse: any = [
      {
          "id": "ff8080817a56aea7017a56bbf4ff0002",
          "pocketName": "Tabungan Hari Esok",
          "pocketQty": 0.2,
          "customer": {
              "id": "ff80808178f8dea30178f8ded8fe0000",
              "firstName": "Ahmad",
              "lastName": "Invoker",
              "birthDate": "1998-09-08T17:00:00.000+00:00",
              "address": "Jl. Find and find",
              "status": 1,
              "username": "ahmad",
              "password": "password",
              "email": "adipsandro@gmail.com",
              "phoneNumber": "081234567891"
          },
          "product": {
              "id": "ff80808178fdba3a0178fdbbe0b10000",
              "productName": "Platinum",
              "productPriceBuy": 844542,
              "productPriceSell": 859585,
              "productImage": "1.png",
              "productStatus": 1,
              "createdAt": "2021-04-22T17:00:00.000+00:00",
              "updatedAt": "2021-04-22T17:00:00.000+00:00",
              "productHistories": []
          }
      },
  ];

    it('should call checkout() after click', () => {
      const spy = spyOn(transactionService, 'execute').and.callFake((data: PurchaseRequestModel, id: string): Observable<any> => {
        return from([mockCheckoutResponse])
      })
      component.checkout(0);
      expect(spy).toHaveBeenCalled();
    });

  });

});
