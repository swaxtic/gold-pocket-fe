import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/components/carousel/carousel.component';
import { ProductsComponent } from './home/components/products/products.component';
import { TemplateModule } from '../template/template.module';
import { BenefitComponent } from './home/components/benefit/benefit.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';

const COMPONENTS = [PagesComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    TemplateModule,
    HomeModule,
    LoginModule,
    RouterModule,
  ],
  exports: [
    PagesComponent,
  ]
})
export class PagesModule { }
