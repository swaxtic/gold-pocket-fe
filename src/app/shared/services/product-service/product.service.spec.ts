import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';


// apa yg di testing
// ketika ada kemungkikan salah dan benar
// test coverage branch = > if else
// ketika error apa sih yang kalia aexpect
describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  const mockProduct = {
    id: "ff80808178fdba3a0178fdbbe0b10000",
    productName: "Platinum",
    productPriceBuy: 844542,
    productPriceSell: 859585,
    productImage: "1.png",
    productStatus: 1,
    createdAt: "2021-04-22T17:00:00.000+00:00",
    updatedAt: "2021-04-22T17:00:00.000+00:00",
    productHistories: []
  }

  const mockProductHistoriesModel = [
    {
        "id": "ff80808178fe0d190178fe14a37e0002",
        "historyDate": "2021-04-23T09:34:28.718+00:00",
        "priceBuy": 859585,
        "priceSell": 859585
    },
    {
        "id": "ff80808178fe152d0178fe1595ce0000",
        "historyDate": "2021-04-23T09:35:30.666+00:00",
        "priceBuy": 8595885,
        "priceSell": 859585
    },
    {
        "id": "ff8080817a4e67c2017a4e691f360000",
        "historyDate": "2021-06-27T16:59:09.959+00:00",
        "priceBuy": 859400,
        "priceSell": 859585
    }
];

  describe('#getProduct', () => {

    it('should return an Observable<Product[]>', () => {
      service.getData("ff80808178fdba3a0178fdbbe0b10000")
        .subscribe((response: any) => {
          console.log("result from spec", response);
          expect(response).toBe(mockProduct);
        })
    
      const request = httpMock.expectOne('http://localhost:8083/product/ff80808178fdba3a0178fdbbe0b10000');
      request.flush(mockProduct);
      expect(request.request.method).toBe('GET');

    })

  });

  describe('#getHistoriesProduct', () => {

    it('should return an Observable<historyProduct[]>', () => {
      service.getHistoriesData("ff80808178f965fd0178f973f14b0001")
        .subscribe((response: any) => {
          console.log("result history product from spec", response);
          expect(response).toBe(mockProductHistoriesModel);
        })
    
      const request = httpMock.expectOne('http://localhost:8083/product/ff80808178f965fd0178f973f14b0001/history');
      request.flush(mockProductHistoriesModel);
      expect(request.request.method).toBe('GET');

    })

  });


});
