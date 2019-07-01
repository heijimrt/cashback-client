import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashbackComponent } from './cashback.component';
import { CashbackRoutingModule } from './cashback-routing.module';

@NgModule({
  declarations: [CashbackComponent],
  imports: [
    CommonModule,
    CashbackRoutingModule
  ]
})
export class CashbackModule { }
