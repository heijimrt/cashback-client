import { NgModule } from '@angular/core';
import { AuthRegisterComponent } from './register/auth-register.component';
import { AuthLoginComponent } from './login/auth-login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/auth-login.module#AuthLoginModule',
  },
  {
    path: 'register',
    loadChildren: './register/auth-register.module#AuthRegisterModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
