import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { SigaMe } from '../model/siga-me';

@Injectable({
  providedIn: 'root'
})
export class SigamMeService {
  dataSource: SigaMe[] = [{ nome: 'Sigame-1', tipo: 'Permanene', categoria: 'Total', status: 'Aberto', ramal: '6001', destino: '6099' }];
  private readonly API = '/api/sigaMe';
  constructor(private httpClient: HttpClient) { }

  getSigaMe() {
    return this.httpClient.get<SigaMe[]>(this.API).pipe(
      delay(2000),
      // first(),
      tap(sigame => console.log(sigame))
    );
  }
}
