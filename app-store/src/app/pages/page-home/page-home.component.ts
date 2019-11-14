import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto-service/produto.service';
import { Observable } from 'rxjs';
import { Produto, Categoria } from 'src/app/models/produto.model';
import { CategoriaService } from 'src/app/services/categoria-service/categoria.service';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho.service';
import { PaginaProduto } from 'src/app/models/paginaproduto.model';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})

export class PageHomeComponent implements OnInit {
  
  public PaginaProdutos : Observable<PaginaProduto>[];
  public Categorias: Observable<Categoria[]>;

  constructor(
    private ProdutoService: ProdutoService,
    private CategoriaService: CategoriaService,
    private CarrinhoService: CarrinhoService
  ) { }

  ngOnInit() {    
    this.Categorias = this.CategoriaService.Listar();
  }

  public CriarPaginacao(categoria: Categoria) {
     
  }

  public AdicionarAoCarrinho(produto: Produto) {
    
  }

}
