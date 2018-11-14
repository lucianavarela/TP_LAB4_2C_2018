import { Component } from '@angular/core';

@Component({
  selector: 'recaptcha-module',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css'],
})
export class RecaptchaComponent {
    public resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
    }
}