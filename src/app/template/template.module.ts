import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

const LAYOUT: any = [];
const COMPONENTS: any = [HeaderComponent, FooterComponent, TemplateComponent];

@NgModule({
  declarations: [
    ...LAYOUT,
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ...LAYOUT,
    TemplateComponent
  ]
})
export class TemplateModule { }
