import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthRegisterModule } from './register/auth-register.module';
import { AuthLoginModule } from './login/auth-login.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    AuthRegisterModule,
    AuthLoginModule
  ]
})
export class AuthModule { }
