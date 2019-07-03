import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(
    value: Array<Object>,
    key: string
  ): any {
    return value.reduce((a, b) => a + (b[key] || 0), 0);
  }

}
