import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BaseService {

  constructor( ) { }

  protected EndPoint(url: string): string {
    return environment.baseUrl + url;
  }

  protected HeaderAuthorization(): HttpHeaders {
    return new HttpHeaders({'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`});
  }
}
