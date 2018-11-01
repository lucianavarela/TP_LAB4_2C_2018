import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  is_logged: boolean = false;
  usuario: any;

  constructor(public auth: LoginService) {
  }

  ngOnInit() {
    this.is_logged = this.auth.isLogued();
    if (this.is_logged) {
      this.usuario = this.auth.getToken().data;
      if (this.usuario.sector == 'cocina') {
        this.usuario.sector = 'cocinaSector';
      }
    }
  }

}
