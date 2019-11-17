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

  constructor(
    private HttpClient: HttpClient,
    private StorageService: StorageService
  ) {
    super();
  }

  public Logar(Usuario: Usuario): Observable<any> {
    let body = `username=${Usuario.Email}&password=${Usuario.Senha}&grant_type=password`;
    return this.HttpClient.post(this.EndPoint("Token"), body);
  }

  get UsuarioLogado(): boolean {
    return this.StorageService.Select("access_token") !== null;
  }

  get AccessToken(): string {
    return `Bearer ${this.StorageService.Select("access_token")}`;
  }

  public SalvarToken(token: string) {
    this.StorageService.Insert("access_token", token);
  }

  public RemoverToken() {
    this.StorageService.Remove("access_token");
  }
}
