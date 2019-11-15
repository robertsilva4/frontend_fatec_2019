import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from 'src/app/models/carrinho.model';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho.service';
import { AutenticacaoService } from 'src/app/services/autenticacao-service/autenticacao.service';

@Component({
  selector: 'page-pedidos',
  templateUrl: './page-pedidos.component.html',
  styleUrls: ['./page-pedidos.component.css']
})

export class PagePedidosComponent implements OnInit {

  public Pedidos: Observable<Carrinho[]>

  constructor(
    private CarrinhoService: CarrinhoService,
    private AutenticacaoService: AutenticacaoService
  ) { }

  ngOnInit() {
    this.Pedidos = this.CarrinhoService.Consultar(this.AutenticacaoService.UsuarioLogado);
  }

  public Target(carrinho: Carrinho): string {
    return carrinho.Id.toString();
  }

}
