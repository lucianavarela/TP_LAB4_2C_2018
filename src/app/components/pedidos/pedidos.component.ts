import { Component, OnInit, ViewChild } from '@angular/core';
import { PedidoService } from '../../services/pedido/pedido.service';
import { Pedido } from '../../classes/pedido';

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
}
