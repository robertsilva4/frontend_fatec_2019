export class Produto {
    Id: number;
    Nome: string;
    Descricao: string;
    Valor: number;
    Imagem: string;
    Categoria: Categoria;
}

export class Categoria {
    Id: number;
    Descricao: string;
}

