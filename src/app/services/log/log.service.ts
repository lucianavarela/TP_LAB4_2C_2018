import { Injectable } from '@angular/core';
import { MihttpService } from '../http/mihttp.service';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  ruta: string = 'api/log/'
  response: any;

  constructor(private router: Router, public miHttp: MihttpService, public popup: PopupComponent) { }

  public traerLogs() {
    return this.miHttp.get(this.ruta);
  }

  public borrarLog(id) {
    return this.miHttp.delete(this.ruta + id);
  }

  public agregarLog(objeto) {
    return this.miHttp.post(this.ruta, objeto)
      .then(data => {
        if (data.status == "OK") {
          this.traerLogs();
        } else {
          this.popup.show("error", data.mensaje);
        }
      })
      .catch(e => {
        console.info(e);
      });
  }

  public editarLog(id, objeto) {
    return this.miHttp.put(this.ruta + id, objeto)
      .then(this.traerLogs())
      .catch(e => {
        console.info(e);
      });
  }
}
