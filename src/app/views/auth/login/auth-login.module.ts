import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLoginComponent } from './auth-login.component';
import { AuthLoginRoutingModule } from './auth-login-routing.module';

@NgModule({
  declarations: [
    AuthLoginComponent
  ],
  imports: [
    CommonModule,
    AuthLoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthLoginModule { }
