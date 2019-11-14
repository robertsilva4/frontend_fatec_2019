import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Categoria } from 'src/app/models/produto.model';
import { Observable } from 'rxjs';
import { Contadores } from 'src/app/models/contadores.model';
import { HttpClient } from '@angular/common/http';
import { PaginaProduto } from 'src/app/models/paginaproduto.model';

@Injectable({
  providedIn: 'root'
})

export class ContadoresService extends BaseService {

  constructor(private HttpClient: HttpClient) { 
    super();
  }

  public BuscarContadores(PaginaProduto : PaginaProduto) : Observable<Contadores> {
     return this.HttpClient.post<Contadores>(this.EndPoint("Contadores"), PaginaProduto);
  }
}
