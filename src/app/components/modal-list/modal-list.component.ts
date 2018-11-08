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
  @Input() showModal: boolean;
  public keys: Array<any>;
  public content: Array<any>;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.list) {
      this.keys = Object.keys(this.list[0]);
      this.content = [];
      for (let i of this.list) {
        let new_row = [];
        for (let j of this.keys) {
          new_row.push(i[j]);
        }
        this.content.push(new_row);
      }
    }
  }

  closeModal() {
    this.callback.emit();
  }
}
