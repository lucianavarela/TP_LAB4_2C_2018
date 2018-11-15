import { Injectable } from '@angular/core';
import { MihttpService } from '../http/mihttp.service';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  static instance: ComandaService;
  ruta: string = 'api/comanda/'
  response: any;

  constructor(private router: Router, public miHttp: MihttpService, public popup: PopupComponent) {
    ComandaService.instance = this;
  }

  public traerComandas() {
    return this.miHttp.get(this.ruta);
  }

  public borrarComanda(id) {
    return this.miHttp.delete(this.ruta + id);
  }

  public agregarComanda(objeto) {
    return this.miHttp.post(this.ruta, objeto)
      .then(data => {
        if (data.status == "OK") {
          this.traerComandas();
        } else {
          this.popup.show("error", data.mensaje);
        }
      })
      .catch(e => {
        console.info(e);
      });
  }

  public editarComanda(id, objeto) {
    return this.miHttp.put(this.ruta + id, objeto)
      .then(this.traerComandas())
      .catch(e => {
        console.info(e);
      });
  }

  public subirFoto(objeto, codigoComanda) {
    return this.miHttp.post(this.ruta + 'foto/' + codigoComanda, objeto)
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
