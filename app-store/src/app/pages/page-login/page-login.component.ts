import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao-service/autenticacao.service';
import { Usuario } from 'src/app/models/cliente.model';

@Component({
  selector: 'page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})

export class PageLoginComponent implements OnInit {

  public UsuarioLogin: Usuario;
  public UsuarioLogado: Usuario;
  public Aviso: string;

  constructor(
    private AutenticacaoService: AutenticacaoService
  ) {
    this.UsuarioLogin = new Usuario();
  }

  ngOnInit() {
    this.UsuarioLogado = this.AutenticacaoService.UsuarioLogado;
  }

  public Deslogar() {
    this.AutenticacaoService.RemoverUsuarioStorage();
    this.UsuarioLogado = null;
    this.UsuarioLogin = new Usuario();
  }

  public Logar() {
    this.Aviso = undefined;

    this.AutenticacaoService.Logar(this.UsuarioLogin).subscribe(
      sucess => {
        if (sucess !== null) {
          this.UsuarioLogado = sucess;
          this.AutenticacaoService.SalvarUsuarioStorage(sucess);
        } else {
          this.Aviso = "Dados de usuário inválidos";
        }
      },
      error => {
        this.Aviso = "Erro ao se autenticar";
      }
    );
  }

}
