import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductModel } from 'src/app/shared/models/product.model';
import { PocketService } from 'src/app/shared/services/pocket-service/pocket.service';
import { ProductService } from 'src/app/shared/services/product-service/product.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productService: ProductService;
  let pocketService: PocketService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      // providers: [PocketService, ProductService]
      providers: [{
        provide: ProductService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService)
    pocketService = TestBed.inject(PocketService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TODO: Still spec no has expectations
  describe('#LoadProduct()', ()=> {
    const mockProduct: any = {
        "id": "ff80808178fdba3a0178fdbbe0b10000",
        "productName": "Platinum",
        "productPriceBuy": 844542,
        "productPriceSell": 859585,
        "productImage": "1.png",
        "productStatus": 1,
    }
    it('should load Product', fakeAsync(() => {
      const mockTask = productService.getData('ff80808178fdba3a0178fdbbe0b10000');
      mockTask.subscribe((product) => {
        fixture.detectChanges();
        tick();
        component.product = product
        fixture.detectChanges();
        expect(component.product).toEqual(mockProduct);
      });
    }))

  })

  // describe('#loadPocket()', ()=> {
  //   const mockPocket = [{

  //   }]
  //   it('should load pocket', () => {
      
  //   })

  // })

});
