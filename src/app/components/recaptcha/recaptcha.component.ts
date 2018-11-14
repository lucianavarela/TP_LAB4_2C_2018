import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'recaptcha-module',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css'],
})
export class RecaptchaComponent {
    @Output() callback: EventEmitter<any> = new EventEmitter();

    public resolved() {
        this.callback.emit();
    }
}