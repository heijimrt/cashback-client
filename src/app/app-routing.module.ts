import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsModule } from './views/views.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    ViewsModule,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
