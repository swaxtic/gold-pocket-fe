import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsInputDirective } from './directives/bs-input/bs-input.directive';



@NgModule({
  declarations: [
    BsInputDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
