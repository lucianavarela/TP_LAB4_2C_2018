import { Component, OnInit } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda/comanda.service';
import { Comanda } from 'src/app/classes/comanda';
import { Mesa } from 'src/app/classes/mesa';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  mesas: Array<Mesa>;
  cliente: string;
  mesa: string = '';
  cocina: string = '';
  barra: string = '';
  cerveza: string = '';
  candy: string = '';

  constructor(public service: ComandaService, public mesa_service: MesaService, public popup: PopupComponent) {
  }

  ngOnInit() {
    this.mesa_service.traerMesas()
      .then(data => {
        this.mesas = Mesa.toMesa(data);
        this.mesas = this.mesas.filter(function(e){return e.estado=='cerrada' })
      })
      .catch(e => {
        console.info(e);
      });
  }

  cargar() {
    if (this.cliente != '') {
      this.service.agregarComanda({
        'nombreCliente': this.cliente,
        'idMesa': this.mesa,
        'barra': this.barra,
        'cerveza': this.cerveza,
        'candy': this.candy,
        'cocina': this.cocina
      });
    } else {
      this.popup.show('error', 'Complete todos los campos');
    }
  }
}
