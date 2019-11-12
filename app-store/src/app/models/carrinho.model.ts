import { Cliente } from './cliente.model';
import { Produto } from './produto.model';

export class CarrinhoProduto {
    Quantidade: number;
    Produto: Produto;

    constructor() {
        this.Produto = new Produto();
    }
}

export class Carrinho {
    Id: number;
    DataCompra: Date;
    ValorTotal: number;
    Cliente: Cliente;
    Produtos: CarrinhoProduto[];

    constructor() {
        this.Cliente = new Cliente();
        this.Produtos = new Array<CarrinhoProduto>();
    }
}