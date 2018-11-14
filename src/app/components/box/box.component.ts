import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mesa } from '../../classes/mesa';
import { MesaService } from '../../services/mesa/mesa.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() objeto: any;
  @Input() tipo: string;
  @Input() content: any;
  public usuario: any;
  public showModal: boolean = false;
  public is_logged: boolean = false;
  public type: string;

  constructor(public mesaService: MesaService, public auth: LoginService) { }

  ngOnInit() {
    this.is_logged = this.auth.isLogued();
    if (this.auth.isLogued()) {
      this.usuario = this.auth.getToken().data;
    }
  }

  showModalWindow(object:any, type: string) {
    this.type = type;
    this.content = object;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
