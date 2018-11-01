import { Injectable } from '@angular/core';
import { MihttpService } from '../http/mihttp.service';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  ruta: string = 'api/pedido/'
  response: any;

  constructor(private router: Router, public miHttp: MihttpService, public popup: PopupComponent) { }

  public traerPedidos() {
    return this.miHttp.get(this.ruta);
  }

  public borrarPedido(id) {
    return this.miHttp.delete(this.ruta + id);
  }

  public agregarPedido(objeto) {
    return this.miHttp.post(this.ruta, objeto)
      .then(data => {
        if (data.status == "OK") {
          this.traerPedidos();
        } else {
          this.popup.show("error", data.mensaje);
        }
      })
      .catch(e => {
        console.info(e);
      });
  }

  public editarPedido(id, objeto) {
    return this.miHttp.put(this.ruta + id, objeto)
      .then(this.traerPedidos())
      .catch(e => {
        console.info(e);
      });
  }
}
