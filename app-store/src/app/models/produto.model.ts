import { Contadores } from './paginacao.model';

export class Produto {
    Id: number;
    Nome: string;
    Valor: number;
    Imagem: string;
    Categoria: Categoria;

    constructor() {
        this.Categoria = new Categoria();
    }
}

export class Categoria {
    Id: number;
    Descricao: string;
}

export class PaginaProduto {
    Categoria: Categoria;
    Contadores: Contadores;
    Produtos: Produto[];

    constructor() {
        this.Categoria = new Categoria();
        this.Contadores = new Contadores();
        this.Produtos = new Array<Produto>();
    }
}