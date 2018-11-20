import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HTTPStatus } from './interceptors/spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'micomanda';
  @ViewChild(SidebarComponent) barra: SidebarComponent;
  HTTPActivity: boolean;

  constructor(private httpStatus: HTTPStatus) {
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => {this.HTTPActivity = status;});
  }

  changeOfRoutes() {
    this.barra.updateBar();
  }
}

