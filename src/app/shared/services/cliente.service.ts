

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../model/cliente';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL_CLIENTES = 'http://localhost:3000/clientes';

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.clienteHttp.get<Cliente[]>(this.URL_CLIENTES);
  }

  inserir(novoCliente: Cliente): Observable<Cliente> {
    return this.clienteHttp.post<Cliente>(
      this.URL_CLIENTES, novoCliente);
  }

  // DELETE /clientes/3
  apagar(idParaRemocao: string): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_CLIENTES}/${idParaRemocao}`);
  }

  pesquisarPorId(id: string): Observable<Cliente> {
    return this.clienteHttp.get<Cliente>(`${this.URL_CLIENTES}/${id}`);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.clienteHttp
      .put<Cliente>(`${this.URL_CLIENTES}/${cliente.id}`, cliente);
  }
}

