import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserTransactionsComponent } from './pages/user-transactions/user-transactions.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: UserProfileComponent
      },
      {
        path: 'transactions',
        component: UserTransactionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }