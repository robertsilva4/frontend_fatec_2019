import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoService } from '../produto-service/produto.service';
import { PaginaProduto } from 'src/app/models/paginaproduto.model';
import { ContadoresService } from '../contadores-service/contadores.service';

@Injectable({
  providedIn: 'root'
})

export class PaginacaoProdutoService {

  constructor(
    private ProdutoService : ProdutoService,
    private ContadoresService : ContadoresService
  ) { 
     this.ChangePaginas = new EventEmitter();
  }
  
  @Output() public ChangePaginas : EventEmitter<Observable<PaginaProduto>[]>;

  public CriarPaginacao(PaginaProduto : PaginaProduto) {
     this.ContadoresService.BuscarContadores(PaginaProduto).subscribe(contadores => {
         PaginaProduto.Contadores = contadores;
         this.CriarDelegacaoPaginas(PaginaProduto);
     });
  }

  private CriarDelegacaoPaginas(paginaProduto : PaginaProduto) {
      var Observables = new Array<Observable<PaginaProduto>>();
      for(var i = 1; i <= paginaProduto.Contadores.TotalPaginas; i++) {
          var Pagina = new PaginaProduto();
          Pagina.Categoria = paginaProduto.Categoria;
          Pagina.Contadores.NumeroPagina = new Number(i);
          Pagina.Contadores.TamanhoPagina = paginaProduto.Contadores.TamanhoPagina;
          console.log(Pagina);
          Observables.push(this.ProdutoService.BuscarPagina(Pagina));
      } 
      this.ChangePaginas.emit(Observables);
  } 
}
