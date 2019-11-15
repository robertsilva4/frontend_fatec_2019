export class Cliente {
    Id: number;
    Nome: string;
    Cpf: string;
    Email: string;
    Senha: string;
    ConfirmarSenha: string;
}

export class Usuario extends Cliente {
    constructor() {
        super();
    }
}