import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService {

  constructor(private HttpClient: HttpClient) { 
    super()
  }

  
}
