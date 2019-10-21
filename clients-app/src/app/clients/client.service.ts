import { Injectable } from '@angular/core';
import { Client } from './client';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndoPoint: string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get(this.urlEndoPoint).pipe(
      map( response => response as Client[] )
    );
  }
}
