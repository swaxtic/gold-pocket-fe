import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PocketModelRequest } from '../../models/pocket.model';

import { PocketService } from './pocket.service';

describe('PocketService', () => {
  let service: PocketService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PocketService]
    });
    service = TestBed.inject(PocketService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
// mock response
  const mockPockets = [
    {
        "id": "ff808081791260d8017912612f850000",
        "pocketName": "Tabungan",
        "pocketQty": 1.2,
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
            "id": "ff80808178f965fd0178f973f14b0001",
            "productName": "Gold",
            "productPriceBuy": 859400,
            "productPriceSell": 859585,
            "productImage": "2.png",
            "productStatus": 1,
            "createdAt": "2021-04-22T17:00:00.000+00:00",
            "updatedAt": "2021-06-26T17:00:00.000+00:00",
            "productHistories": [
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
            ]
        }
    },
    {
        "id": "ff8080817a56aea7017a56bbf4ff0002",
        "pocketName": "Tabungan Hari Esok",
        "pocketQty": 0.3,
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
    {
        "id": "ff8080817a51b2e0017a51b31e1f0000",
        "pocketName": "Pocket Baru",
        "pocketQty": 1.0,
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
            "id": "ff80808178f965fd0178f973f14b0001",
            "productName": "Gold",
            "productPriceBuy": 859400,
            "productPriceSell": 859585,
            "productImage": "2.png",
            "productStatus": 1,
            "createdAt": "2021-04-22T17:00:00.000+00:00",
            "updatedAt": "2021-06-26T17:00:00.000+00:00",
            "productHistories": [
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
            ]
        }
    },
    {
        "id": "ff8080817912cec9017912e859d70003",
        "pocketName": "Tabungan Hari Tua",
        "pocketQty": 7.0,
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
            "id": "ff80808178f965fd0178f973f14b0001",
            "productName": "Gold",
            "productPriceBuy": 859400,
            "productPriceSell": 859585,
            "productImage": "2.png",
            "productStatus": 1,
            "createdAt": "2021-04-22T17:00:00.000+00:00",
            "updatedAt": "2021-06-26T17:00:00.000+00:00",
            "productHistories": [
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
            ]
        }
    }
  ];
  const mockAddPocket = {
    "id": "ff8080817a5c4f24017a64f8d0900008",
    "pocketName": "Tabungan Hari Tua",
    "pocketQty": 0.0,
    "customer": {
        "id": "ff80808178f8dea30178f8ded8fe0000",
        "firstName": null,
        "lastName": null,
        "birthDate": null,
        "address": null,
        "status": null,
        "username": null,
        "password": null,
        "email": null,
        "phoneNumber": null
    },
    "product": {
        "id": "ff80808178f965fd0178f973f14b0001",
        "productName": null,
        "productPriceBuy": null,
        "productPriceSell": null,
        "productImage": null,
        "productStatus": null,
        "createdAt": null,
        "updatedAt": null,
        "productHistories": []
    }
  }
  const mockEditPocket = {
    "id": "ff8080817a5c4f24017a64f8d0900008",
    "pocketName": "Tabungan Hari Tua Edited",
    "pocketQty": 0.0,
    "customer": {
        "id": "ff80808178f8dea30178f8ded8fe0000",
        "firstName": null,
        "lastName": null,
        "birthDate": null,
        "address": null,
        "status": null,
        "username": null,
        "password": null,
        "email": null,
        "phoneNumber": null
    },
    "product": {
        "id": "ff80808178f965fd0178f973f14b0001",
        "productName": null,
        "productPriceBuy": null,
        "productPriceSell": null,
        "productImage": null,
        "productStatus": null,
        "createdAt": null,
        "updatedAt": null,
        "productHistories": []
    }
  }

  describe('#getPocket', () => {

    it('should return an Observable<Pockets[]>', () => {
      service.getData("ff80808178f8dea30178f8ded8fe0000")
        .subscribe((response: any) => {
          console.log("result from spec", response);
          expect(response).toBe(mockPockets);
        })
    
      const request = httpMock.expectOne('http://localhost:8083/customer/ff80808178f8dea30178f8ded8fe0000/pockets');
      request.flush(mockPockets);
      expect(request.request.method).toBe('GET');

    })

  });

  describe('#postPocket', () => {
    const mock: PocketModelRequest = {
      pocketName: "Tabungan Hari Tua",
      pocketQty : 0,
      customer: {
         id:"ff80808178f8dea30178f8ded8fe0000"
      },
      product : {
          "id": "ff80808178f965fd0178f973f14b0001"
      }
    }

    it('should return an Observable<Pocket[]>', () => {
      service.addPocket(mock)
        .subscribe((response) => {
          console.log("AddPocket => result from spec", response);
          expect(response.pocketName).toBe(mock.pocketName);
    })
    
      const request = httpMock.expectOne('http://localhost:8083/pocket');
      request.flush(mockAddPocket);
      expect(request.request.method).toBe('POST');

    });

  });

  describe('#editPocket', () => {
    const mock: PocketModelRequest = {
      id: "ff8080817a5c4f24017a64f8d0900008",
      pocketName: "Tabungan Hari Tua Edited",
      pocketQty : 0,
      customer: {
         id:"ff80808178f8dea30178f8ded8fe0000"
      },
      product : {
          "id": "ff80808178f965fd0178f973f14b0001"
      }
    }

    it('should return an Observable<Pocket[]>', () => {
      service.editPocket(mock)
        .subscribe((response) => {
          console.log("EditPocket => result from spec", response);
          expect(response.pocketName).toBe(mock.pocketName);
    })
    
      const request = httpMock.expectOne('http://localhost:8083/pocket');
      request.flush(mockEditPocket);
      expect(request.request.method).toBe('PUT');

    });

  });

});
