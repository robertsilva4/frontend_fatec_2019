import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho.service';
import { CarrinhoProduto, Carrinho } from 'src/app/models/carrinho.model';
import { AutenticacaoService } from 'src/app/services/autenticacao-service/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-carrinho',
  templateUrl: './page-carrinho.component.html',
  styleUrls: ['./page-carrinho.component.css']
})

export class PageCarrinhoComponent implements OnInit {

  private _total: number;
  private _carrinho: Carrinho;

  public Produtos: CarrinhoProduto[];
  public Aviso: string;

  constructor(
    private CarrinhoService: CarrinhoService,
    private AutenticacaoService: AutenticacaoService,
    private Router: Router
  ) { }

  ngOnInit() {
    this.Listar();
  }

  public Listar(){
    this._carrinho = this.CarrinhoService.Carrinho();
    this.Produtos = this._carrinho.Produtos;
    this._total = this.CarrinhoService.Total();
  }

  get Total(): number {
    return this._total;
  }

  public RemoverItem(item: CarrinhoProduto) {
    this.CarrinhoService.Remover(item);
    this.Listar();
  }

  public InserirCompra() {
    this.Aviso = undefined;
    this.CarrinhoService.Inserir(this._carrinho).subscribe(
      sucess => {
        this.Aviso = "Carrinho finalizado com sucesso";
        this.CarrinhoService.LimparCarrinho();
        this.Listar();
      },
      error => this.Aviso = "Erro ao inserir compra"
    );
  }

  public Finalizar() {
    if (this.AutenticacaoService.UsuarioLogado == false) {
      this.Router.navigate(['/login']);
    } else {
      this.InserirCompra();
    }
  }
}
