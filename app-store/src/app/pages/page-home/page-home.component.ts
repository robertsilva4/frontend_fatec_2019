import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto-service/produto.service';
import { Observable } from 'rxjs';
import { Produto, Categoria } from 'src/app/models/produto.model';
import { CategoriaService } from 'src/app/services/categoria-service/categoria.service';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})

export class PageHomeComponent implements OnInit {

  public Produtos: Observable<Produto[]>;
  public Categorias: Observable<Categoria[]>;

  constructor(
    private ProdutoService: ProdutoService,
    private CategoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.Produtos = this.ProdutoService.Listar();
    this.Categorias = this.CategoriaService.Listar();
  }

  public ListarPorCategoria(categoria: Categoria) {
    //this.Produtos = this.ProdutoService.ConsultarPorCategoria(categoria.Id);
  }

}
