import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpleadoService } from '../../services/empleado/empleado.service';
import { Empleado } from '../../classes/empleado';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

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

  export() {
    if (this.empleados.length > 0) {
      var options = {
        headers: Object.keys(this.empleados[0])
      };
      new Angular5Csv(this.empleados, 'dump-empleados', options);
    }
  }
}
