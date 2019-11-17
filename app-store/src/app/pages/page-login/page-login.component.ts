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
  public Aviso: string;

  constructor(
    private AutenticacaoService: AutenticacaoService
  ) {
    this.UsuarioLogin = new Usuario();
  }

  ngOnInit() {
  }

  get UsuarioLogado(): boolean {
    return this.AutenticacaoService.UsuarioLogado;
  }

  public Deslogar() {
    this.AutenticacaoService.RemoverToken();
    this.UsuarioLogin = new Usuario();
  }

  public Logar() {
    this.Aviso = undefined;

    this.AutenticacaoService.Logar(this.UsuarioLogin).subscribe(
      token => {
        this.AutenticacaoService.SalvarToken(token.access_token);
      },
      error => {
        this.Aviso = "Erro ao se autenticar";
      }
    );
  }

}
