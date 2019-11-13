import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { Produto, PaginaProduto } from 'src/app/models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseService {

  constructor(private HttpClient: HttpClient) { 
    super();
  }

  public Listar(): Observable<Produto[]> {
    return this.HttpClient.get<Produto[]>(this.EndPoint("Produto"));
  }

  public Deletar(id: number) {
    this.HttpClient.delete(`Produto/Deletar/${id}`);
  }

  public Consultar(id: number): Observable<Produto> {
    return this.HttpClient.get<Produto>(this.EndPoint(`Produto/${id}`));
  }

  public ConsultarPorCategoria(PaginaProduto: PaginaProduto): Observable<Produto[]> {
    return this.HttpClient.post<Produto[]>(this.EndPoint(`Produto/Categoria`), PaginaProduto);
  }

  public NovaPagina() : PaginaProduto {
    let pagina = new PaginaProduto();
    pagina.Contadores.NumeroPagina = 1;
    pagina.Contadores.TamanhoPagina = 10;
    return pagina;
  }
  
}
