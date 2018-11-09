import { Component, OnInit, ViewChild } from '@angular/core';
import { PedidoService } from '../../services/pedido/pedido.service';
import { Pedido } from '../../classes/pedido';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Array<Pedido>;
  message: string = '';

  constructor(public pedido_service: PedidoService) {
    this.pedidos = new Array<Pedido>();
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.pedido_service.traerPedidos()
      .then(data => {
        this.pedidos = Pedido.toPedido(data);
      })
      .catch(e => {
        console.info(e);
      });
  }

  triggerPopup(message: string) {
    this.message = message;
  }

  export() {
    if (this.pedidos.length > 0) {
      var options = {
        headers: Object.keys(this.pedidos[0])
      };
      new Angular5Csv(this.pedidos, 'dump-empleados', options);
    }
  }
}
