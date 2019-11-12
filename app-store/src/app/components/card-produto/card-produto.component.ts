import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})

export class CardProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }

  @Input() Produto: Produto;

  public AdicionarAoCarrinho(produto: Produto) {

  }
}
