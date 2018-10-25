import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  is_logged: boolean = false;
  usuario: any;

  constructor(public auth: LoginService) {
    if (this.auth.getToken()) this.usuario = this.auth.getToken().data;
  }

  ngOnInit() {
    this.is_logged = this.auth.isLogued();
  }

}
