import { Injectable, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MihttpService {
  public api: string = "https://comandaback.herokuapp.com/";
  public httpOptions: any;

  constructor(public http: HttpClient) {
    let token = localStorage.getItem('token');
    if (token == 'null') {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    } else {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': token
        })
      }
    }
    console.log(this.httpOptions);
  }

  public get(url: string): any {
    return this.http.get(this.api + url, this.httpOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public post(url, data: Object) {
    console.log('3', url, data, this.api + url, this.httpOptions);
    return this.http.post(this.api + url, data, this.httpOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public delete(url: string) {
    return this.http.delete(url, this.httpOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public put(url: string, objeto: any) {
    return this.http.put(url, objeto, this.httpOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: any) {
    console.log(res);
    return res || {};
  }

  private handleError(error: Response | any) {
    return error;
  }
}
