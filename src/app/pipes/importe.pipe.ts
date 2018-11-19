import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'importe'
})
export class ImportePipe implements PipeTransform {

  transform(amount: number): string {
    return '$' + amount.toLocaleString('en');
  }

}
