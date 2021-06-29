import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavNavbarDirective } from './directives/nav-navbar/nav-navbar.directive';
import { DateformatPipe } from './pipes/date-format/dateformat.pipe';
import { TitleformatPipe } from './pipes/title-format/titleformat.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsButtonDirective } from './directives/bs-button/bs-button.directive';
import { CustomButtonDirective } from './directives/custom-button/custom-button.directive';
import { AuthService } from './services/auth-service/auth.service';
import { RupiahPipe } from './pipes/rupiah-format/rupiah.pipe';


const DIRECTIVES = [NavNavbarDirective, BsButtonDirective, CustomButtonDirective]
const PIPES = [DateformatPipe, TitleformatPipe, RupiahPipe]

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...DIRECTIVES,
    ...PIPES,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
