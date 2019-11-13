import { Injectable } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';
import { BaseService } from '../base.service';
import { Carrinho, CarrinhoProduto } from 'src/app/models/carrinho.model';

@Injectable({
  providedIn: 'root'
})

export class CarrinhoService extends BaseService {

  private Carrinho: Carrinho;

  constructor(private StorageService: StorageService) { 
    super();
    this.Carrinho = new Carrinho();
  }

  private AtualizarCarrinho() {
    this.StorageService.Insert("carrinho", JSON.stringify(this.Carrinho));
  }

  private GetCarrinho() {
    this.Carrinho = JSON.parse(this.StorageService.Select("carrinho"));
  }

  public Adicionar(item: CarrinhoProduto) {
    this.GetCarrinho();
    this.Carrinho.Produtos.push(item);
    this.AtualizarCarrinho();
  }
}
