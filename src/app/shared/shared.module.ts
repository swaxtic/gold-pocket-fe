import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavNavbarDirective } from './directives/nav-navbar/nav-navbar.directive';
import { DateformatPipe } from './pipes/date-format/dateformat.pipe';
import { TitleformatPipe } from './pipes/title-format/titleformat.pipe';

const DIRECTIVES = [NavNavbarDirective]
const PIPES = [DateformatPipe, TitleformatPipe]

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }
