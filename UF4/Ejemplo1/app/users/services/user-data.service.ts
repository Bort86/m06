import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders }
  from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  private mainUrl: string =
    "http://localhost/restaurantAppDB/src/app/users/php/controllers/MainController.php"
  private httpParams: HttpParams;
  private body: any;

  constructor(private httpClient: HttpClient) { }

  userConnection(user: User): Observable<any[]>{
    this.body = {
      action: '10000',
      jsonData: JSON.stringify(user)
    };

    return this.accessServer();
  }

  accessServer(): Observable<any[]>{
    let httpHeaders: HttpHeaders = new HttpHeaders();

    httpHeaders.set('Content-Type',
    'application/x-www-form-urlencoded;charset=UTF-8');

    return this.httpClient.post<any[]>(this.mainUrl,
      this.body, {headers: httpHeaders,
        params: this.httpParams});
  }
}
