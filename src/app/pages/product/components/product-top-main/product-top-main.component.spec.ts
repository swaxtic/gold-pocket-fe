import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopMainComponent } from './product-top-main.component';

describe('ProductTopMainComponent', () => {
  let component: ProductTopMainComponent;
  let fixture: ComponentFixture<ProductTopMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTopMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTopMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
