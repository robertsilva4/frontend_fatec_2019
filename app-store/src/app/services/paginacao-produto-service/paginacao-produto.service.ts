import { Injectable } from '@angular/core';
import { ProdutoService } from '../produto-service/produto.service';
import { Categoria } from 'src/app/models/produto.model';
import { PaginaProduto } from 'src/app/models/paginaproduto.model';
import { Contadores } from 'src/app/models/contadores.model';
import { ContadoresService } from '../contadores-service/contadores.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaginacaoProdutoService {

  constructor(
    private ProdutoService : ProdutoService,
    private ContadoresService : ContadoresService
  ) { }
  
  public CriarPaginacao(PaginaProduto : PaginaProduto) {
     this.ContadoresService.BuscarContadores(PaginaProduto).subscribe(contadores => {
         this.CriarDelegacaoPaginas(contadores);
     });
  }

  private CriarDelegacaoPaginas(contadores: Contadores) : Observable<PaginaProduto>[] {
      
  }
}
