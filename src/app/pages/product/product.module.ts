import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductTopMainComponent } from './components/product-top-main/product-top-main.component';
import { ProductTransactionComponent } from './components/product-transaction/product-transaction.component';
import { ProductComponent } from './components/product.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [ProductTopMainComponent, ProductTransactionComponent, ProductComponent, SidebarComponent]


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
  ]
})
export class ProductModule { }
