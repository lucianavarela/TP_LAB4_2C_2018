import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';

export class Usuario {
  public usuario: string = '';
  public clave: string = '';
  public clave2: string = '';
  public sector: string = '';
  public sueldo: number = 0;
  public estado: string = '';

  constructor(usuario: string, clave: string, clave2: string, sector: string, sueldo: number, estado: string) {
    this.usuario = usuario;
    this.clave = clave;
    this.clave2 = clave2;
    this.sector = sector;
    this.sueldo = sueldo;
    this.estado = estado;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  usuario: Usuario = new Usuario('', '', '', '0', 0, 'activo');

  constructor(private empleadoService: EmpleadoService, public popup: PopupComponent) {
  }

  ngOnInit() {
  }

  register() {
    if (this.usuario.clave == this.usuario.clave2) {
      if (this.usuario.sector != '0') {
        this.empleadoService.agregarEmpleado({
          usuario: this.usuario.usuario,
          clave: this.usuario.clave,
          sector: this.usuario.sector,
          sueldo: this.usuario.sueldo,
          estado: this.usuario.estado
        });
      } else {
        this.popup.show('error', 'Debe elegir un sector.');
      }
    } else {
      this.popup.show('error', 'Las claves deben ser iguales.');
    }
  }

  allowSubmit() {
    $('#submitBtn').removeAttr('disabled');
  }
}
