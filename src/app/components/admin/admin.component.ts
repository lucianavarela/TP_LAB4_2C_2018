import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { Mesa } from 'src/app/classes/mesa';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public type: string;
  public list: Array<any>;
  message: string = '';
  showModal: boolean = false;
  mesas: Array<Mesa>;
  is_loaded: boolean = false;
  mesa_recaudacion: string = '';
  from_date: string = '';
  to_date: string = '';
  reporte_1: any = null;
  reporte_2: any = null;
  reporte_3: any = null;
  reporte_4: any = null;
  reporte_5: any = null;
  reporte_6: any = null;
  reporte_7: any = null;
  reporte_8: any = null;
  reporte_9: any = null;
  reporte_10: any = null;
  reporte_11: any = null;
  reporte_12: any = null;
  reporte_13: any = null;
  reporte_14: any = null;

  constructor(public empleado_service: EmpleadoService, public mesa_service: MesaService) {
    this.mesas = new Array<Mesa>();
  }

  ngOnInit() {
    this.from_date = '2018-06-25';
    this.to_date = '2018-07-10';
    this.updateList();
    this.mesa_service.traerMesas()
      .then(data => {
        this.mesas = Mesa.toMesa(data);
        this.mesa_recaudacion = 'g8sve';
      })
      .catch(e => {
        console.info(e);
      });
  }

  updateList() {
    this.empleado_service.traerReportes()
      .then(data => {
        for (let key in data) {
          switch (key) {
            case '7b-logs_por_sector':
              this.reporte_1 = {
                'nombre': 'Logs por sector',
                'content': data[key]
              };
              break;
            case '8a-más_pedido':
              this.reporte_2 = {
                'nombre': 'Más pedido',
                'content': data[key]
              };
              break;
            case '8b-menos_pedido':
              this.reporte_3 = {
                'nombre': 'Menos pedido',
                'content': data[key]
              };
              break;
            case '8c-pedidos_demorados':
              this.reporte_4 = {
                'nombre': 'Pedidos demorados',
                'content': data[key]
              };
              break;
            case '8d-pedidos_cancelados':
              this.reporte_5 = {
                'nombre': 'Pedidos cancelados',
                'content': data[key]
              };
              break;
            case '9a-mesa_mas_usada':
              this.reporte_6 = {
                'nombre': 'Mesa más usada',
                'content': data[key]
              };
              break;
            case '9b-mesa_menos_usada':
              this.reporte_7 = {
                'nombre': 'Mesa menos usada',
                'content': data[key]
              };
              break;
            case '9c-mesa_mas_paga':
              this.reporte_8 = {
                'nombre': 'Mesa más paga',
                'content': data[key]
              };
              break;
            case '9d-mesa_menos_paga':
              this.reporte_9 = {
                'nombre': 'Mesa menos paga',
                'content': data[key]
              };
              break;
            case '9e-mesa_importe_mas_alto':
              this.reporte_10 = {
                'nombre': 'Mesa con importe más alto',
                'content': data[key]
              };
              break;
            case '9f-mesa_importe_mas_bajo':
              this.reporte_11 = {
                'nombre': 'Mesa con importe menos alto',
                'content': data[key]
              };
              break;
            case '9g-recaudacion_mesa_entre_fechas':
              this.reporte_12 = {
                'nombre': 'Recaudación entre 2 fechas por mesa',
                'content': data[key]
              };
              break;
            case '9h-mejores_comentarios':
              this.reporte_13 = {
                'nombre': 'Mejores comentarios',
                'content': data[key]
              };
              break;
            case '9i-peores_comentarios':
              this.reporte_14 = {
                'nombre': 'Peores comentarios',
                'content': data[key]
              };
              break;
            default:
              break;
          }
        }
        this.is_loaded = true;
      })
      .catch(e => {
        console.info(e);
      });
  }

  showTable(content:Array<any>) {
    this.type = 'list';
    this.list = content;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  downloadReports() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let today_date = mm.toString() + '-' + dd.toString() + '-' + yyyy.toString();
    let data = document.getElementById('reports-content');
    html2canvas(data).then(canvas => {
      let imgWidth = 300;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('l', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('reports-' + today_date + '.pdf');
    });
  }

}
