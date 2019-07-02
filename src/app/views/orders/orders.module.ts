import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersCreateComponent } from './create/orders-create.component';
import { OrdersShowComponent } from './show/orders-show.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersCreateComponent,
    OrdersShowComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    DropdownModule,
    ReactiveFormsModule,
    InputTextModule,
  ]
})
export class OrdersModule { }
