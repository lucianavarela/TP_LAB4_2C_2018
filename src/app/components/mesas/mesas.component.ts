import { Component, OnInit, ViewChild } from '@angular/core';
import { MesaService } from '../../services/mesa/mesa.service';
import { Mesa } from '../../classes/mesa';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  mesas: Array<Mesa>;
  message: string = '';

  constructor(public mesa_service: MesaService) {
    this.mesas = new Array<Mesa>();
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.mesa_service.traerMesas()
      .then(data => {
        this.mesas = Mesa.toMesa(data);
        if (this.mesas.length == 0) {
          this.message = 'No hay mesas ingresadas';
        }
      })
      .catch(e => {
        console.info(e);
      });
  }

  triggerPopup(message: string) {
    this.message = message;
  }

  export() {
    if (this.mesas.length > 0) {
      var options = {
        headers: Object.keys(this.mesas[0])
      };
      new Angular5Csv(this.mesas, 'dump-empleados', options);
    }
  }
}
