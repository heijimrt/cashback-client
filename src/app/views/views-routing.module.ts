import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'cashback',
    loadChildren: './cashback/cashback.module#CashbackModule',
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class ViewsRoutingModule { }