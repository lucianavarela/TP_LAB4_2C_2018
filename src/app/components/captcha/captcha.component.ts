import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})

export class CaptchaComponent implements OnInit {
  @Output() callback: EventEmitter<any> = new EventEmitter();
  public numbers: Array<string>;
  public numbers_pushed: Array<string>;
  public is_valid: boolean = false;

  constructor() {
    this.numbers = ['1', '2', '3', '4', '5'];
    this.numbers_pushed = [];
  }

  ngOnInit() {
    this.numbers = this.shuffle(this.numbers);
  }

  number_push(number: string) {
    this.numbers_pushed.push(number);
    $('#'+number).hide();
    if (this.numbers.length == this.numbers_pushed.length) {
      let all_are_correct = true;
      for (let i=0; i<this.numbers.length; i++) {
        if ((i+1).toString() != this.numbers_pushed[i]) {
          all_are_correct = false;
          break;
        }
      }
      if (all_are_correct) {
        this.is_valid = true;
        this.callback.emit();
      } else {
        this.is_valid = false;
        this.numbers = this.shuffle(this.numbers);
        this.numbers_pushed = [];
        $('.captcha_number').show();
      }
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
