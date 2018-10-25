import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MihttpService } from './mihttp.service';
import { Subject } from 'rxjs';
import { PopupComponent } from '../components/popup/popup.component';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public name: string;
  private _token: string;
  jwtHelper = new JwtHelperService();
  userTokenData: Subject<any> = new Subject<any>();

  constructor(private router: Router, private http: MihttpService, public popup: PopupComponent) {
    this._token = localStorage.getItem('token');
    this.userTokenData.subscribe((value) => {
      this._token = value
    });
  }

  public isLogued() {
    try {
      let rta = this.jwtHelper.isTokenExpired() || false;
      return rta;
    } catch (error) {
      return false;
    }
  }

  public getToken() {
    try {
      return this.jwtHelper.decodeToken(this._token);
    } catch (error) {
      return undefined;
    }
  }

  public getExpirationDate() {

    try {
      return this.jwtHelper.getTokenExpirationDate(this._token);
    } catch (error) {
      return null;
    }
  }

  public logIn(object: Object) {
    this.http.post('login/', object)
      .then(data => {
        if (data.status == "OK") {
          this.http.updateTokenHeaders(data.token);
          localStorage.setItem('token', data.token);
          this._token = localStorage.getItem('token');
          this.userTokenData.next(!this._token);
          window.location.href = '/';
        } else {
          this.popup.show("error", data.mensaje);
        }
      })
      .catch(e => {
        console.info(e);
      });
  }

  public logOut() {
    try {
      localStorage.setItem('token', null);
      this.http.updateTokenHeaders('');
      window.location.href = '/';
    } catch (error) {
      return false;
    }
  }

  public getSector() {
    if (this.jwtHelper.decodeToken(this._token).sector || this.jwtHelper.decodeToken(this._token).sector === 0)
      return this.jwtHelper.decodeToken(this._token).sector;
    else
      return 1000;
  }
}
