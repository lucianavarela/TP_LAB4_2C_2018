import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLevel]'
})
export class LevelDirective {
  @Input() puntos: number;

  constructor(private el: ElementRef) {};

  ngOnInit() {
    let promedio = this.puntos.toFixed(0);
    switch (promedio) {
      case '1':
        this.el.nativeElement.style.color = '#ff3860';
        break;
      case '2':
        this.el.nativeElement.style.color = '#ff38ad';
        break;
      case '3':
        this.el.nativeElement.style.color = '#f538ff';
        break;
      case '4':
        this.el.nativeElement.style.color = '#6b38ff';
        break;
      case '5':
        this.el.nativeElement.style.color = '#3845ff';
        break;
      case '6':
        this.el.nativeElement.style.color = '#38a1ff';
        break;
      case '7':
        this.el.nativeElement.style.color = '#38d8ff';
        break;
      case '8':
        this.el.nativeElement.style.color = '#38ffb8';
        break;
      case '9':
        this.el.nativeElement.style.color = '#38ff6e';
        break;
      case '10':
        this.el.nativeElement.style.color = '#70ff38';
        break;
      default:
        this.el.nativeElement.style.color = 'gray';
        break;
    }
  }
}
