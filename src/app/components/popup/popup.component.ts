import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  show(type: string, message: string) {
    $('#mensaje').hide();
    if (type == 'error') {
      $('#mensaje').addClass('is-danger');
    } else {
      $('#mensaje').addClass('is-' + type);
    }
    $('#mensaje .message-header p').text(type.toUpperCase());
    $('#mensaje .message-body').text(message);
    $('#mensaje').animate({
      height: 'toggle'
    });
  }

  close() {
    $('#mensaje').hide();
  }
}
