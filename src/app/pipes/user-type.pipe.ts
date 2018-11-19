import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {

  transform(sector: string, args?: any): string {
    let string = ' ';
    switch (sector) {
      case 'cocina':
        string += 'cocinero!';
        break;
      case 'mozo':
        string += 'mozo!';
        break;
      case 'barra':
        string += 'barman!';
        break;
      case 'cerveza':
        string += 'cervezero!';
        break;
      case 'management':
        string += 'manager!';
        break;
      case 'candy':
        string += 'repostero!';
        break;
      default:
        string = '!';
        break;
    }
    return string;
  }

}
