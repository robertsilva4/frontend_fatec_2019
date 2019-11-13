import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho.service';
import { CarrinhoProduto } from 'src/app/models/carrinho.model';

@Component({
  selector: 'page-carrinho',
  templateUrl: './page-carrinho.component.html',
  styleUrls: ['./page-carrinho.component.css']
})

export class PageCarrinhoComponent implements OnInit {

  public Produtos: CarrinhoProduto[];

  constructor(
    private CarrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.Listar();
  }

  public Listar(){
    let Carrinho = this.CarrinhoService.Carrinho();
    this.Produtos = Carrinho.Produtos;
  }

  public Total():number{
    return this.CarrinhoService.Total();
  }
}
