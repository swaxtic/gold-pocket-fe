import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavNavbarDirective } from './directives/nav-navbar/nav-navbar.directive';
import { DateformatPipe } from './pipes/date-format/dateformat.pipe';

const DIRECTIVES = [NavNavbarDirective, DateformatPipe]

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
