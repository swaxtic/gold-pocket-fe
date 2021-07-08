import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from, Observable } from 'rxjs';
import { PocketModelRequest } from 'src/app/shared/models/pocket.model';
import { PocketService } from 'src/app/shared/services/pocket-service/pocket.service';

import { ProductTopMainComponent } from './product-top-main.component';

describe('ProductTopMainComponent', () => {
  let component: ProductTopMainComponent;
  let fixture: ComponentFixture<ProductTopMainComponent>;
  let pocketService: PocketService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTopMainComponent ],
      imports: [HttpClientTestingModule],
      providers: [PocketService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTopMainComponent);
    component = fixture.componentInstance;
    pocketService = TestBed.inject(PocketService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#addPocket()', ()=> {
    const mockPocketResponse: any = {
      "id": "ff8080817a7f1de5017a815a27d8000a",
      "pocketName": "Tabungan Hari Tua Emas",
      "pocketQty": 0.0,
      "customer": {
          "id": "ff80808178f8dea30178f8ded8fe0000",
      },
      "product": {
          "id": "ff80808178f965fd0178f973f14b0001",
      }
  }
    it('should call addPocket() after trigerred', () => {
      //TODO: Trigerred
      const spy = spyOn(pocketService, 'addPocket').and.callFake((data: PocketModelRequest): Observable<any> => {
        return from([mockPocketResponse])
      })
      component.addPocket();
      expect(spy).toHaveBeenCalled();
    });

    // it('should have dataProduct ngOninit', () => {
    //   spyOn(productService, 'getData').and.callFake((id: string): Observable<any> => {
    //     return from([mockProductResponse])
    //   })
    //   component.ngOnInit();
    //   expect(component.product).toEqual(mockProductResponse);
    //   console.log("Product COmponent");
    //   console.log(component.product);
    // });

  });

  describe('#editPocket()', ()=> {
    const mockEditPocketResponse: any = {
      "id": "ff8080817a7f1de5017a815a27d8000a",
      "pocketName": "Tabungan Hari Tua Emas",
      "pocketQty": 0.0,
      "customer": {
          "id": "ff80808178f8dea30178f8ded8fe0000",
      },
      "product": {
          "id": "ff80808178f965fd0178f973f14b0001",
      }
  }
    it('should call addPocket() after trigerred', () => {
      //TODO: Trigerred test
      const spy = spyOn(pocketService, 'editPocket').and.callFake((data: PocketModelRequest): Observable<any> => {
        return from([mockEditPocketResponse])
      })
      component.editPocket();
      expect(spy).toHaveBeenCalled();
    });

  });

  describe('#deletePocket()', ()=> {
    const mockDeletePocketResponse: any = {
      "result": true,
      "message": "Pocket Berhasil di Hapus"
  }
    it('should call deletePocket() after trigerred', () => {
      //TODO: Trigerred test
      const spy = spyOn(pocketService, 'deletePocket').and.callFake((id: string): Observable<any> => {
        return from([mockDeletePocketResponse])
      })
      component.deletePocket('ff8080817a7f1de5017a815a27d8000a');
      expect(spy).toHaveBeenCalled();
    });

  });

});
