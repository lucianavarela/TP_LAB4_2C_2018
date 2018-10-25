import { Injectable } from '@angular/core';
import { MihttpService } from './mihttp.service';
import { Mesa } from '../classes/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  ruta: string = 'api/mesa/'
  response: any;

  constructor(public miHttp: MihttpService) { }

  public traerMesas() {
    return this.miHttp.get(this.ruta);
  }

  public borrarMesa(id) {
    return this.miHttp.delete(this.miHttp.api + this.ruta + id);
  }

  public agregarMesa(objeto) {
    return this.miHttp.post(this.miHttp.api + this.ruta, objeto)
      .then(this.traerMesas())
      .catch(e => {
        console.info(e);
      });
  }

  public editarMesa(id, objeto) {
    return this.miHttp.put(this.miHttp.api + this.ruta + id, objeto)
      .then(this.traerMesas())
      .catch(e => {
        console.info(e);
      });
  }
}
