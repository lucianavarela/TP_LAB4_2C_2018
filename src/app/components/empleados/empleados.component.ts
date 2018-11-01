import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpleadoService } from '../../services/empleado/empleado.service';
import { Empleado } from '../../classes/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: Array<Empleado>;
  message: string = '';

  constructor(public empleado_service: EmpleadoService) {
    this.empleados = new Array<Empleado>();
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.empleado_service.traerEmpleados()
      .then(data => {
        this.empleados = Empleado.toEmpleado(data);
      })
      .catch(e => {
        console.info(e);
      });
  }

  triggerPopup(message: string) {
    this.message = message;
  }
}
