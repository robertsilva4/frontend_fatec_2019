import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { CarrinhoProduto } from 'src/app/models/carrinho.model';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho.service';

@Component({
  selector: 'card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})

export class CardProdutoComponent implements OnInit {

  constructor(
    private CarrinhoService: CarrinhoService
  ) { }

  ngOnInit() {  }

  @Input() Produto: Produto;

  public AdicionarAoCarrinho(produto: Produto) {
    let item = new CarrinhoProduto();
    item.Quantidade = 1;
    item.Produto = produto;
    this.CarrinhoService.Adicionar(item);
  }
}
