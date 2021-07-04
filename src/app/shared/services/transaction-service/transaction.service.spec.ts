import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthModel } from '../../models/auth-model';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService]
    });
    service = TestBed.inject(TransactionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#AddNewTransaction', () => {
    const mockResultTransactionSuccess = {
      "id": "ff8080817a5c4f24017a652b5cd40009",
      "purchaseDate": "2021-07-02T03:02:58.417+00:00",
      "purchaseType": 0,
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
      "purchaseDetails": [
          {
              "id": "ff8080817a5c4f24017a652b5ce1000a",
              "price": 859585,
              "quantityInGram": 0.1,
              "product": {
                  "id": "ff80808178f965fd0178f973f14b0001",
                  "productName": "Gold",
                  "productPriceBuy": 859400,
                  "productPriceSell": 859585,
                  "productImage": "2.png",
                  "productStatus": 1,
                  "createdAt": "2021-04-22T17:00:00.000+00:00",
                  "updatedAt": "2021-06-26T17:00:00.000+00:00"
              },
              "pocket": {
                  "id": "ff808081791260d8017912612f850000",
                  "pocketName": null,
                  "pocketQty": null,
                  "customer": null
              }
          }
      ]
    }

    it('should return an succes Add Transaction Response', () => {
      const data = {
        "purchaseType" : 0,
        "purchaseDetails": [
            {
                "quantityInGram":0.1,
                "pocket":{ 
                    "id":"ff808081791260d8017912612f850000"
                } 
            }
        ]
      }
      service.execute(data, 'ff80808178f8dea30178f8ded8fe0000')
        .subscribe((response: any) => {
          console.log("#AddNewTransaction result from spec", response);
          expect(response).toBe(mockResultTransactionSuccess);

        });
      const request = httpMock.expectOne('http://localhost:8083/purchase?customerId=ff80808178f8dea30178f8ded8fe0000');
      request.flush(mockResultTransactionSuccess);
      expect(request.request.method).toBe('POST');

    })
  });

  describe('#GetTransactionHistory', () => {
    const mockResultTransactionHistory = {
      "content": [
          {
              "id": "ff8080817a5c4f24017a652b5cd40009",
              "purchaseDate": "2021-07-01T17:00:00.000+00:00",
              "purchaseType": 0,
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
              "purchaseDetails": [
                  {
                      "id": "ff8080817a5c4f24017a652b5ce1000a",
                      "price": 859585,
                      "quantityInGram": 0.1,
                      "product": {
                          "id": "ff80808178f965fd0178f973f14b0001",
                          "productName": "Gold",
                          "productPriceBuy": 859400,
                          "productPriceSell": 859585,
                          "productImage": "2.png",
                          "productStatus": 1,
                          "createdAt": "2021-04-22T17:00:00.000+00:00",
                          "updatedAt": "2021-06-26T17:00:00.000+00:00"
                      },
                      "pocket": {
                          "id": "ff808081791260d8017912612f850000",
                          "pocketName": "Tabungan",
                          "pocketQty": 1.3,
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
                          }
                      }
                  }
              ]
          },
          {
              "id": "ff8080817a5c4f24017a5f352f040005",
              "purchaseDate": "2021-06-30T17:00:00.000+00:00",
              "purchaseType": 1,
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
              "purchaseDetails": [
                  {
                      "id": "ff8080817a5c4f24017a5f352f040006",
                      "price": 844542,
                      "quantityInGram": 0.5,
                      "product": {
                          "id": "ff80808178fdba3a0178fdbbe0b10000",
                          "productName": "Platinum",
                          "productPriceBuy": 844542,
                          "productPriceSell": 859585,
                          "productImage": "1.png",
                          "productStatus": 1,
                          "createdAt": "2021-04-22T17:00:00.000+00:00",
                          "updatedAt": "2021-04-22T17:00:00.000+00:00"
                      },
                      "pocket": {
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
                          }
                      }
                  }
              ]
          },
          {
              "id": "ff8080817a5c4f24017a5f27f2310001",
              "purchaseDate": "2021-06-30T17:00:00.000+00:00",
              "purchaseType": 0,
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
              "purchaseDetails": [
                  {
                      "id": "ff8080817a5c4f24017a5f27f23f0002",
                      "price": 859585,
                      "quantityInGram": 0.1,
                      "product": {
                          "id": "ff80808178fdba3a0178fdbbe0b10000",
                          "productName": "Platinum",
                          "productPriceBuy": 844542,
                          "productPriceSell": 859585,
                          "productImage": "1.png",
                          "productStatus": 1,
                          "createdAt": "2021-04-22T17:00:00.000+00:00",
                          "updatedAt": "2021-04-22T17:00:00.000+00:00"
                      },
                      "pocket": {
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
                          }
                      }
                  }
              ]
          },
          {
              "id": "ff8080817a5c4f24017a5f28446f0003",
              "purchaseDate": "2021-06-30T17:00:00.000+00:00",
              "purchaseType": 0,
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
              "purchaseDetails": [
                  {
                      "id": "ff8080817a5c4f24017a5f2844700004",
                      "price": 859585,
                      "quantityInGram": 0.2,
                      "product": {
                          "id": "ff80808178fdba3a0178fdbbe0b10000",
                          "productName": "Platinum",
                          "productPriceBuy": 844542,
                          "productPriceSell": 859585,
                          "productImage": "1.png",
                          "productStatus": 1,
                          "createdAt": "2021-04-22T17:00:00.000+00:00",
                          "updatedAt": "2021-04-22T17:00:00.000+00:00"
                      },
                      "pocket": {
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
                          }
                      }
                  }
              ]
          },
          {
              "id": "ff8080817a56aea7017a5767298b0005",
              "purchaseDate": "2021-06-28T17:00:00.000+00:00",
              "purchaseType": 0,
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
              "purchaseDetails": [
                  {
                      "id": "ff8080817a56aea7017a5767298b0006",
                      "price": 859585,
                      "quantityInGram": 0.1,
                      "product": {
                          "id": "ff80808178f965fd0178f973f14b0001",
                          "productName": "Gold",
                          "productPriceBuy": 859400,
                          "productPriceSell": 859585,
                          "productImage": "2.png",
                          "productStatus": 1,
                          "createdAt": "2021-04-22T17:00:00.000+00:00",
                          "updatedAt": "2021-06-26T17:00:00.000+00:00"
                      },
                      "pocket": {
                          "id": "ff808081791260d8017912612f850000",
                          "pocketName": "Tabungan",
                          "pocketQty": 1.3,
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
                          }
                      }
                  }
              ]
          }
      ],
      "pageable": {
          "sort": {
              "sorted": false,
              "unsorted": true,
              "empty": true
          },
          "offset": 0,
          "pageNumber": 0,
          "pageSize": 5,
          "paged": true,
          "unpaged": false
      },
      "last": false,
      "totalPages": 7,
      "totalElements": 33,
      "numberOfElements": 5,
      "sort": {
          "sorted": false,
          "unsorted": true,
          "empty": true
      },
      "number": 0,
      "first": true,
      "size": 5,
      "empty": false
    }

    it('should return an succes Pageable of Transactions', () => {
      service.getHistory('ff80808178f8dea30178f8ded8fe0000', 1)
        .subscribe((response: any) => {
          console.log("#AddNewTransaction result from spec", response);
          expect(response).toBe(mockResultTransactionHistory);

        });
      const request = httpMock.expectOne('http://localhost:8083/purchases/ff80808178f8dea30178f8ded8fe0000?page=0&size=5');
      request.flush(mockResultTransactionHistory);
      expect(request.request.method).toBe('GET');

    })

  })

});
