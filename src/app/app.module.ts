import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BoxComponent } from './components/box/box.component';
import { MihttpService } from './services/http/mihttp.service';
import { MesaService } from './services/mesa/mesa.service';
import { LoginService } from './services/login/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
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
import { ChartsModule } from 'ng2-charts';
import { ComandaService } from './services/comanda/comanda.service';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { Spinner, HTTPStatus } from './interceptors/spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TiempoPipe } from './pipes/tiempo.pipe';
import { LevelDirective } from './directives/level.directive';
import { IsAuthDirective } from './directives/isauth.directive';
import { ImportePipe } from './pipes/importe.pipe';
import { UserTypePipe } from './pipes/user-type.pipe';
import { StatusDirective } from './directives/status.directive';
import { AddFormComponent } from './components/add-form/add-form.component';

const RxJS_Services = [Spinner, HTTPStatus];

const MiRuteo = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mesas', component: MesasComponent },
  { path: 'comandas', component: ComandasComponent },
  { path: 'comandas/carga', component: AddFormComponent },
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
    ModalListComponent,
    RecaptchaComponent,
    SpinnerComponent,
    TiempoPipe,
    LevelDirective,
    IsAuthDirective,
    ImportePipe,
    UserTypePipe,
    StatusDirective,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(MiRuteo),
    RecaptchaModule
  ],
  providers: [MihttpService, MesaService, LoginService, PopupComponent, ModalListComponent, ComandaService, RxJS_Services, {
    provide: HTTP_INTERCEPTORS, useClass: Spinner, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
