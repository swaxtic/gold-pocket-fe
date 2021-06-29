import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from '../shared/guards/route.guard';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/components/profile.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module')
        .then((m) => m.HomeModule),
      },
      {
        path: 'product/:productId',
        canActivate: [RouteGuard],
        loadChildren: () => import('./product/product.module')
        .then((m) => m.ProductModule),
      },
      {
        path: 'profile',
        canActivate: [RouteGuard],
        loadChildren: () => import('./profile/profile.module')
          .then(m => m.ProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
