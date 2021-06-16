import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const LAYOUT: any = [];
const COMPONENTS: any = [HeaderComponent, FooterComponent, TemplateComponent];

@NgModule({
  declarations: [
    ...LAYOUT,
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...LAYOUT,
    TemplateComponent
  ]
})
export class TemplateModule { }
