import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrdersCreateComponent } from './create/orders-create.component';
import { OrdersShowComponent } from './show/orders-show.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: '',
        component: OrdersShowComponent,
      },
      {
        path: 'create',
        component: OrdersCreateComponent,
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class OrdersRoutingModule { }
