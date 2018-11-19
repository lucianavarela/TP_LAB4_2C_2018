import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  is_logged: boolean = false;
  usuario: any;

  constructor(private router: Router, public auth: LoginService) {
    if (this.auth.getToken()) this.usuario = this.auth.getToken().data;
  }

  ngOnInit() {
    this.is_logged = this.auth.isLogued();
    if (!this.is_logged) {
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.auth.logOut();
  }
}
