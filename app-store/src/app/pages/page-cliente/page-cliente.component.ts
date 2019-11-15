import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';
import { AutenticacaoService } from 'src/app/services/autenticacao-service/autenticacao.service';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'page-cliente',
  templateUrl: './page-cliente.component.html',
  styleUrls: ['./page-cliente.component.css']
})

export class PageClienteComponent implements OnInit {

  public Cliente: Cliente;
  public Aviso: string;

  constructor(
    private ClienteService: ClienteService,
    private AutenticacaoService: AutenticacaoService
  ) { }

  ngOnInit() {
    this.Cliente = this.AutenticacaoService.UsuarioLogado;
    if (this.Cliente === null) {
      this.Cliente = new Cliente();
    }
  }

  public Salvar() {
    this.Aviso = undefined;

    if (this.Cliente.Senha != this.Cliente.ConfirmarSenha) {
      this.Aviso = "As senhas não estão igual."
    } else {
      if (this.Cliente.Id === undefined)
        this.Cadastrar();
      else
        this.Alterar();
    }
  }

  private Cadastrar() {
    this.ClienteService.Inserir(this.Cliente).subscribe(
      sucess => {
        this.Cliente = sucess;
        this.Aviso = "Cliente cadastrado com sucesso";
      },
      error => this.Aviso = "Erro ao cadastrar cliente"
    );
  }

  private Alterar() {
    this.ClienteService.Atualizar(this.Cliente).subscribe(
      sucess => {
        this.Cliente = sucess;
        this.Aviso = "Cliente alterado com sucesso";
      },
      error => this.Aviso = "Erro ao alterar cliente"
    );
  }

}
