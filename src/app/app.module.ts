import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BoxComponent } from './components/box/box.component';
import { MihttpService } from './services/http/mihttp.service';
import { MesaService } from './services/mesa/mesa.service';
import { LoginService } from './services/login/login.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ComandasComponent } from './components/comandas/comandas.component';
import { EncuestasComponent } from './components/encuestas/encuestas.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AdminComponent } from './components/admin/admin.component';
import { PopupComponent } from './components/popup/popup.component';
import { RegisterComponent } from './components/register/register.component';
import { LogsComponent } from './components/logs/logs.component';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { ModalListComponent } from './components/modal-list/modal-list.component';

const MiRuteo = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mesas', component: MesasComponent },
  { path: 'comandas', component: ComandasComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'encuestas', component: EncuestasComponent },
  { path: 'admin', component: AdminComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BoxComponent,
    SidebarComponent,
    LoginComponent,
    MesasComponent,
    PedidosComponent,
    ComandasComponent,
    EncuestasComponent,
    EmpleadosComponent,
    AdminComponent,
    PopupComponent,
    RegisterComponent,
    LogsComponent,
    CaptchaComponent,
    ModalListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(MiRuteo)
  ],
  providers: [MihttpService, MesaService, LoginService, PopupComponent, ModalListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
