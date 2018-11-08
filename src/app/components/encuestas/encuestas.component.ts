import { Component, OnInit, ViewChild } from '@angular/core';
import { EncuestaService } from '../../services/encuesta/encuesta.service';
import { Encuesta } from '../../classes/encuesta';
import { ExportToCSV } from '@molteni/export-csv';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  encuestas: Array<Encuesta>;
  message: string = '';

  constructor(public encuesta_service: EncuestaService) {
    this.encuestas = new Array<Encuesta>();
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.encuesta_service.traerEncuestas()
      .then(data => {
        this.encuestas = Encuesta.toEncuesta(data);
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
    exporter.exportAllToCSV(this.encuestas, "dump-encuestas");
  }
}
