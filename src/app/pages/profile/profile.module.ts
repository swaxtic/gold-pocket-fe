import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserTransactionsComponent } from './pages/user-transactions/user-transactions.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const COMPONENTS = [ProfileComponent, SidebarComponent, UserTransactionsComponent, UserProfileComponent]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ProfileModule { }
