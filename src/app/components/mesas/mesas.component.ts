import { Component, OnInit, ViewChild } from '@angular/core';
import { MesaService } from '../../services/mesa/mesa.service';
import { Mesa } from '../../classes/mesa';
import { ExportToCSV } from '@molteni/export-csv';

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
      })
      .catch(e => {
        console.info(e);
      });
  }

  triggerPopup(message: string) {
    this.message = message;
  }

  export() {
    var exporter = new ExportToCSV();
    exporter.exportAllToCSV(this.mesas, "dump-mesas");
  }
}
