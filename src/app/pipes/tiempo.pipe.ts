import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiempo'
})
export class TiempoPipe implements PipeTransform {

  transform(value: number): string {
    let string;
    let time = value / 1000;
    if (value > 0) {
      string = 'Quedan ';
    } else {
      string = 'Tarde por ';
      time *= -1;
    }
    if (time < 60) {
      string += time.toFixed(1) + ' seg';
    } else {
      time /= 60;
      if (time < 60) {
        string += time.toFixed(1) + ' min';
      } else {
        time /= 60;
        string += time.toFixed(1) + ' hs';
      }
    }
    return string;
  }

}
