import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class MihttpService {
  public api: string = "https://comandaback.herokuapp.com/";

  constructor(public http: HttpClient) { }

  public get(url: string): any {
    console.log(httpOptions)
    return this.http.get(this.api + url, httpOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public post(url, data: Object) {
    return this.http.post(this.api + url, data, httpOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public delete(url: string) {
    return this.http.delete(url, httpOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public put(url: string, objeto: any) {
    return this.http.put(url, objeto, httpOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res || {};
  }

  private handleError(error: Response | any) {
    return error;
  }

  public updateTokenHeaders(token: string) {
    if (token == '') {
      httpOptions.headers = httpOptions.headers.delete('Authorization');
    } else {
      httpOptions.headers = httpOptions.headers.append('Authorization', token);
    }
    console.log(httpOptions);
  }
}
