import { Directive, ElementRef, Input } from '@angular/core';
import { Pedido } from '../classes/pedido';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {
  @Input() objeto: any;

  constructor(private el: ElementRef) { };

  ngOnInit() {
    if (this.objeto.constructor.name == 'Pedido' && this.objeto.estado == 'cancelado') {
      this.el.nativeElement.style.backgroundColor = '#bebebe';
    }
  }

}
