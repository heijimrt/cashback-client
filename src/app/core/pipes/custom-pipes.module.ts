import { NgModule } from '@angular/core';
import { SumPipe } from './sum.pipe';

@NgModule({
  declarations: [
    SumPipe
  ],
  providers: [
    SumPipe
  ],
  exports: [
    SumPipe
  ]
})
export class CustomPipesModule { }
