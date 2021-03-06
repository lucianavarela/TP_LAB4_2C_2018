import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

export class Usuario {
  public usuario: string = '';
  public clave: string = '';

  constructor(usuario: string, clave: string) {
    this.usuario = usuario;
    this.clave = clave;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario('', '');
  public can_login: boolean = false;
  sectores: { sector: string, user: string }[] = [
    { 'sector': 'management', 'user': 'adri' },
    { 'sector': 'mozo', 'user': 'agus' },
    { 'sector': 'cocina', 'user': 'luli' },
    { 'sector': 'barra', 'user': 'omar' },
    { 'sector': 'candy', 'user': 'cami' },
    { 'sector': 'cerveza', 'user': 'moni' }
  ]

  constructor(private login: LoginService, private router: Router) {
    this.usuario.usuario = '';
    this.usuario.clave = '';
  }

  ngOnInit() {
    if ((window.location.href).indexOf('localhost') > -1) {
      this.can_login = true;
    }
  }

  enviar() {
    this.login.logIn({
      usuario: this.usuario.usuario,
      clave: this.usuario.clave
    });
  }

  submit(objeto: any) {
    this.usuario.usuario = objeto.user;
    this.usuario.clave = '123';
  }

  isNoRobot() {
    this.can_login = true;
  }
}
