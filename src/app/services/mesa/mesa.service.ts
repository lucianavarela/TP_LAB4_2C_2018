import { Injectable } from '@angular/core';
import { MihttpService } from '../http/mihttp.service';
import { Mesa } from '../../classes/mesa';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  static instance: MesaService;
  ruta: string = 'api/mesa/'
  response: any;

  constructor(private router: Router, public miHttp: MihttpService, public popup: PopupComponent) {
    MesaService.instance = this;
  }

  public traerMesas() {
    return this.miHttp.get(this.ruta);
  }

  public borrarMesa(id) {
    return this.miHttp.delete(this.ruta + id);
  }

  public agregarMesa(objeto) {
    return this.miHttp.post(this.ruta, objeto)
      .then(data => {
        if (data.status == "OK") {
          this.traerMesas();
        } else {
          this.popup.show("error", data.mensaje);
        }
      })
      .catch(e => {
        console.info(e);
      });
  }

  public editarMesa(id, objeto) {
    return this.miHttp.put(this.ruta + id, objeto)
      .then(this.traerMesas())
      .catch(e => {
        console.info(e);
      });
  }

  public cerrar(objeto) {
    return this.miHttp.post(this.ruta + 'cerrar', objeto)
      .then(data => {
        if (data.status == "OK") {
          location.reload();
        } else {
          this.popup.show("error", data.mensaje);
        }
      })
      .catch(e => {
        console.info(e);
      });
  }
}
