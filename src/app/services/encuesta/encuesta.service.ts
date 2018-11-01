import { Injectable } from '@angular/core';
import { MihttpService } from '../http/mihttp.service';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  ruta: string = 'api/encuesta/'
  response: any;

  constructor(private router: Router, public miHttp: MihttpService, public popup: PopupComponent) { }

  public traerEncuestas() {
    return this.miHttp.get(this.ruta);
  }

  public borrarEncuesta(id) {
    return this.miHttp.delete(this.ruta + id);
  }

  public agregarEncuesta(objeto) {
    return this.miHttp.post(this.ruta, objeto)
      .then(data => {
        if (data.status == "OK") {
          this.traerEncuestas();
        } else {
          this.popup.show("error", data.mensaje);
        }
      })
      .catch(e => {
        console.info(e);
      });
  }

  public editarEncuesta(id, objeto) {
    return this.miHttp.put(this.ruta + id, objeto)
      .then(this.traerEncuestas())
      .catch(e => {
        console.info(e);
      });
  }
}
