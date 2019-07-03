import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxCurrencyModule } from 'ngx-currency';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersCreateComponent } from './create/orders-create.component';
import { OrdersShowComponent } from './show/orders-show.component';
import { CustomPipesModule } from 'src/app/core/pipes/custom-pipes.module';

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
    NgxCurrencyModule,
    CustomPipesModule
  ]
})
export class OrdersModule { }
