import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) export class AppComponent {
  title = 'micomanda';
}

@Component({
  selector: 'recaptcha',
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6Ld12HoUAAAAAPjwxTsCRO41efWc9BfNYT-7oA63"></re-captcha>`,
}) export class MyApp {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}

