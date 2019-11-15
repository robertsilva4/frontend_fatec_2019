import { Categoria, Produto } from './produto.model';
import { Contadores } from './contadores.model';

export class PaginaProduto {
    Categoria : Categoria;
    Contadores : Contadores;
    Produtos: Produto[];

    constructor() {
        this.Categoria = new Categoria();
        this.Contadores = new Contadores();
    }
}