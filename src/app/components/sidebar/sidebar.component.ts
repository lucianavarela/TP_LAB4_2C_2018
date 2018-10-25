import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  is_logged: boolean = false;
  usuario: any;

  constructor(public auth: LoginService) {
    if (this.auth.getToken()) this.usuario = this.auth.getToken().data;
    this.auth.userTokenData.subscribe(value => {
      this.usuario = value;
    });
  }

  ngOnInit() {
    this.is_logged = this.auth.isLogued();
  }

  logout() {
    this.auth.logOut();
  }

}
