import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { StorageService } from '../storage-service/storage.service';
import { Usuario } from 'src/app/models/cliente.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoService extends BaseService {

  private _usuarioLogado: Usuario;

  constructor(
    private HttpClient: HttpClient,
    private StorageService: StorageService
  ) { 
    super();
    this._usuarioLogado = undefined;
  }

  public Logar(Usuario: Usuario): Observable<Usuario> {
    return this.HttpClient.post<Usuario>(this.EndPoint("Autenticacao"), Usuario);
  }

  get UsuarioLogado(): Usuario {
    this._usuarioLogado = JSON.parse(this.StorageService.Select("user"));
    return this._usuarioLogado;
  }

  public SalvarUsuarioStorage(usario: Usuario) {
    this._usuarioLogado = usario;
    this.StorageService.Insert("user", JSON.stringify(this._usuarioLogado));
  }

  public RemoverUsuarioStorage() {
    this._usuarioLogado = undefined;
    this.StorageService.Remove("user");
  }
}
