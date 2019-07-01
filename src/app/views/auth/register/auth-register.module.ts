import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgxMaskModule } from 'ngx-mask';
import { AuthRegisterRoutingModule } from './auth-register-routing.module';
import { AuthRegisterComponent } from './auth-register.component';

@NgModule({
  declarations: [
    AuthRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRegisterRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class AuthRegisterModule { }
