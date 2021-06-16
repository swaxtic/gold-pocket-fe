import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavNavbarDirective } from './directives/nav-navbar/nav-navbar.directive';

const DIRECTIVES = [NavNavbarDirective]

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class SharedModule { }
