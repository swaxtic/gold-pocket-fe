import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { from, Observable } from 'rxjs';
import { PocketService } from 'src/app/shared/services/pocket-service/pocket.service';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { ProductComponent } from './product.component';

describe('PagesProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productService : ProductService;
  let pocketService: PocketService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ProductService, PocketService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService)
    pocketService = TestBed.inject(PocketService);
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

  describe('#LoadPocket()', ()=> {
    const mockPocketResponse: any = [
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

    it('should call loadPocket() after loadProduct()', () => {
      const spy = spyOn(pocketService, 'getData').and.callFake((customerId: string): Observable<any> => {
        return from([mockPocketResponse])
      })
      component.loadPocket('ff80808178f8dea30178f8ded8fe0000', 'Platinum');
      expect(spy).toHaveBeenCalled();
    });

    it('should have dataPocket', () => {
      const spy = spyOn(pocketService, 'getData').and.callFake((customerId: string): Observable<any> => {
        return from([mockPocketResponse])
      })
      component.loadPocket('ff80808178f8dea30178f8ded8fe0000', 'Platinum');
      expect(component.pockets).toEqual(mockPocketResponse);
      console.log("Pocket Component");
      console.log(component.pockets);
    });

  });

});