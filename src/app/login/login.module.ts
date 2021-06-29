import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './services/login.service';

const COMPONENTS = [LoginComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
