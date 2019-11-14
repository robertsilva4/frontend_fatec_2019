import { Injectable } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';
import { BaseService } from '../base.service';
import { Carrinho, CarrinhoProduto } from 'src/app/models/carrinho.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarrinhoService extends BaseService {

  private _carrinho: Carrinho;

  constructor(
    private HttpClient: HttpClient,
    private StorageService: StorageService
  ) {
    super();
    this._carrinho = new Carrinho();
    this.CriarCarrinho();
  }

  private CriarCarrinho() {
    if (this.StorageService.Select("carrinho") === null)
      this.StorageService.Insert("carrinho", JSON.stringify(this._carrinho));
  }

  public Inserir(Carrinho: Carrinho): Observable<Carrinho> {
    return this.HttpClient.post<Carrinho>(this.EndPoint("Carrinho"), Carrinho);
  }

  private AtualizarCarrinho() {
    this.StorageService.Insert("carrinho", JSON.stringify(this._carrinho));
  }

  private GetCarrinho() {
    this._carrinho = JSON.parse(this.StorageService.Select("carrinho"));
  }

  public Adicionar(item: CarrinhoProduto) {
    this.GetCarrinho();

    let itemExistente = this._carrinho.Produtos.find(t => t.Produto.Id === item.Produto.Id);
    if (itemExistente !== undefined)
      itemExistente.Quantidade += 1;
    else
      this._carrinho.Produtos.push(item);

    this.AtualizarCarrinho();
  }

  public Remover(item: CarrinhoProduto) {
    this.GetCarrinho();
    this._carrinho.Produtos = this._carrinho.Produtos.filter(t => t.Produto.Id !== item.Produto.Id);
    this.AtualizarCarrinho();
  }

  public LimparCarrinho() {
    this._carrinho = new Carrinho();
    this.AtualizarCarrinho();
  }

  public Total(): number {
    this.GetCarrinho();
    var Total = 0;
    this._carrinho.Produtos.forEach(produto => {
      Total += (produto.Produto.Valor * produto.Quantidade)
    });
    return Total;
  }

  public Carrinho(): Carrinho {
    this.GetCarrinho();
    return this._carrinho;
  }
}
