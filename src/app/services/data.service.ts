import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  _url = "http://45.66.156.160:98/api/banks";
  constructor(
    private http: HttpClient
  ) {
    console.log('DataService constructor');
  }
  getData() {
    let heades = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this._url, {
      headers: heades
    });
  }
}
