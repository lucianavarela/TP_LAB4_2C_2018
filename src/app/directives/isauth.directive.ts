import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Directive({ selector: '[showAuthed]' })
export class IsAuthDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private auth: LoginService,
    private viewContainer: ViewContainerRef
  ) { }

  condition: string;

  @Input() set showAuthed(condition: string) {
    this.condition = condition;
  }

  ngOnInit() {
    if (this.auth.isLogued()) {
      let user_sector = this.auth.getToken().data.sector;
      if ((user_sector == this.condition || this.condition == 'any') || (this.condition[0] == '-' && user_sector != this.condition.split('-')[1])) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    } else {
      if (this.condition == '') {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  }

}