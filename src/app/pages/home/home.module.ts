import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [HomeComponent, CarouselComponent, ProductsComponent, BenefitComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
