import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  protected EndPoint(url: string): string {
    return environment.baseUrl + url;
  }
}
