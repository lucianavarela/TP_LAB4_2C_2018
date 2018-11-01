import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mesa } from '../../classes/mesa';
import { MesaService } from '../../services/mesa/mesa.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() objeto: any;
  @Input() tipo: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @Output() edit_form: EventEmitter<Mesa> = new EventEmitter();

  constructor(public mesaService: MesaService) { }

  ngOnInit() {
  }

  editar (mesa: Mesa) {
    this.edit_form.emit(mesa);
    this.callback.emit(null);
  }

  borrar (mesa: Mesa) {
    this.mesaService.borrarMesa(mesa.id.toString());
    this.callback.emit(null);
  }

  refresh() {
    this.callback.emit(null);
  }
}
