import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto, Categoria } from 'src/app/models/produto.model';
import { CategoriaService } from 'src/app/services/categoria-service/categoria.service';
import { PaginaProduto } from 'src/app/models/paginaproduto.model';
import { PaginacaoProdutoService } from 'src/app/services/paginacao-produto-service/paginacao-produto.service';
import { Contadores } from 'src/app/models/contadores.model';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})

export class PageHomeComponent implements OnInit {
  public PaginaProdutos : Observable<PaginaProduto>[];
  public Categorias     : Categoria[];
  public PaginaAtual    : Observable<PaginaProduto>;
  public IndiceAtual    : number;

  constructor(
    private CategoriaService: CategoriaService,
    private PaginacaoProdutoService : PaginacaoProdutoService
  ) { 
    this.PaginacaoProdutoService.ChangePaginas.subscribe(
      paginas => this.AtribuirPaginas(paginas)
    );
  }

  ngOnInit() {    
    this.IndiceAtual = 0;
    this.CategoriaService.Listar().subscribe(
      categorias =>  {
         this.Categorias = categorias;
         this.MontarPaginacao(categorias[this.IndiceAtual]);
      }
    );
  }

  AtribuirPaginas(Paginas : Observable<PaginaProduto>[]) {
    this.PaginaProdutos = Paginas;
    this.PaginaAtual = Paginas[0];
  }

  MontarPaginacao(Categoria : Categoria) {
    let paginaProduto = new PaginaProduto();
    paginaProduto.Categoria = Categoria;
    paginaProduto.Contadores = new Contadores();
    paginaProduto.Contadores.TamanhoPagina = 12;
    this.PaginacaoProdutoService.CriarPaginacao(paginaProduto);
  }  

  public CarregarPagina() {
      this.PaginaAtual = this.PaginaProdutos[this.IndiceAtual];
  }

  public ProximaPagina() {
     if (this.IndiceAtual < (this.PaginaProdutos.length - 1)){
        this.IndiceAtual++;
        this.CarregarPagina();
     }
  }

  public PaginaAnterior() {
     if (this.IndiceAtual > 0) {
        this.IndiceAtual--;
        this.CarregarPagina();
     }
  }

  public SelecionarIndice(Indice : number) {
     this.IndiceAtual = Indice;
     this.CarregarPagina();
  }

  public AdicionarAoCarrinho(produto: Produto) {
   
  }
  
  /*public ListarPorCategoria(categoria: Categoria) {
    //this.Produtos = this.ProdutoService.ConsultarPorCategoria(categoria.Id);
  }*/
}
