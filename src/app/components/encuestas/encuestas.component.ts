import { Component, OnInit, ViewChild } from '@angular/core';
import { EncuestaService } from '../../services/encuesta/encuesta.service';
import { Encuesta } from '../../classes/encuesta';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

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
    if (this.encuestas.length > 0) {
      var options = {
        headers: Object.keys(this.encuestas[0])
      };
      new Angular5Csv(this.encuestas, 'dump-empleados', options);
    }
  }
}
