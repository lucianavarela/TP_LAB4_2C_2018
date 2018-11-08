import { Injectable } from '@angular/core';
import { MihttpService } from '../http/mihttp.service';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  ruta: string = 'api/empleado/'
  response: any;

  constructor(private router: Router, public miHttp: MihttpService, public popup: PopupComponent) { }

  public traerEmpleados() {
    return this.miHttp.get(this.ruta);
  }

  public traerReportes() {
    return this.miHttp.get(this.ruta + 'metricas/');
  }

  public borrarEmpleado(id) {
    return this.miHttp.delete(this.ruta + id);
  }

  public agregarEmpleado(objeto) {
    return this.miHttp.post(this.ruta, objeto)
      .then(data => {
        if (data.status == "OK") {
          this.router.navigate(['/empleados']);
          this.traerEmpleados();
        } else {
          this.popup.show("error", data.mensaje);
        }
      })
      .catch(e => {
        console.info(e);
      });
  }

  public editarEmpleado(id, objeto) {
    return this.miHttp.put(this.ruta + id, objeto)
      .then(this.traerEmpleados())
      .catch(e => {
        console.info(e);
      });
  }
}
