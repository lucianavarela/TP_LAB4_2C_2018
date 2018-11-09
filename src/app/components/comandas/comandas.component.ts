import { Component, OnInit, ViewChild } from '@angular/core';
import { ComandaService } from '../../services/comanda/comanda.service';
import { Comanda } from '../../classes/comanda';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.component.html',
  styleUrls: ['./comandas.component.css']
})
export class ComandasComponent implements OnInit {

  comandas: Array<Comanda>;
  message: string = '';

  constructor(public comanda_service: ComandaService) {
    this.comandas = new Array<Comanda>();
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.comanda_service.traerComandas()
      .then(data => {
        this.comandas = Comanda.toComanda(data);
      })
      .catch(e => {
        console.info(e);
      });
  }

  triggerPopup(message: string) {
    this.message = message;
  }

  export() {
    if (this.comandas.length > 0) {
      var options = {
        headers: Object.keys(this.comandas[0])
      };
      new Angular5Csv(this.comandas, 'dump-empleados', options);
    }
  }
}
