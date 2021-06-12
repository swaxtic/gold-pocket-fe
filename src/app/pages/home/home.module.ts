import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedComponentModule } from 'src/app/shared-components/shared-components.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BenefitComponent } from './components/benefit/benefit.component';  



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CarouselComponent,
    BenefitComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
    NgbModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
