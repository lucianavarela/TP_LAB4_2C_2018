import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.css']
})

export class ModalListComponent implements OnInit, OnChanges {
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @Input() tipo: string;
  @Input() list: Array<any>;
  @Input() content: any;
  @Input() showModal: boolean;
  public keys: Array<any>;
  public table: Array<any>;
  public number: number;

  constructor() {
  }

  ngOnInit() {
  }

  cobrar() {
    if (this.number != null && this.number != undefined) {
      this.content.cobrar(this.number);
      this.closeModal();
    }
    this.number = null;
  }

  tomarPedido() {
    if (this.number != null && this.number != undefined) {
      this.content.tomar(this.number);
      this.closeModal();
    }
    this.number = null;
  }

  fileChange(event) {
    this.content.cargarFoto(event);
    this.closeModal();
  }

  ngOnChanges() {
    if (this.list) {
      this.keys = Object.keys(this.list[0]);
      this.table = [];
      for (let i of this.list) {
        let new_row = [];
        for (let j of this.keys) {
          new_row.push(i[j]);
        }
        this.table.push(new_row);
      }
    }
  }

  closeModal() {
    this.callback.emit();
  }
}
