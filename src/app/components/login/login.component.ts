import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

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

  constructor(private login: LoginService) {
    this.usuario.usuario = '';
    this.usuario.clave = '';
  }

  ngOnInit() {
  }

  enviar() {
    this.login.logIn({
      usuario: this.usuario.usuario,
      clave: this.usuario.clave
    });
  }

}
