import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _url: string = 'https://gorest.co.in/public-api/users?page=';
  private _urlByName: string =
    'https://gorest.co.in/public-api/users?first_name=';

  constructor(private readonly http: HttpClient) {}

  getOwners(page: string): Observable<any> {
    const url = this._url + page;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer a_mwfxen9au0oxWpDyxT5zSgi67FXCki2kHj',
      }),
    };
    // console.log(httpOptions.headers.get('Authorization'));

    // Armar funcion para meter al session storage el contador
    // const count = sessionStorage.get('contador');
    // sessionStorage.setItem('contador', count + 1);
    return this.http.get(url, httpOptions);
  }

  getOwnersByName(name: string): Observable<any> {
    const url = this._urlByName + name;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer a_mwfxen9au0oxWpDyxT5zSgi67FXCki2kHj',
      }),
    };
    // console.log(httpOptions.headers.get('Authorization'));
    return this.http.get(url, httpOptions);
  }
}
