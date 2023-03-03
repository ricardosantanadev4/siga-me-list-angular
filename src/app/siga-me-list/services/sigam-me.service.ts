import { Injectable } from '@angular/core';
import { SigaMe } from '../model/siga-me';

@Injectable({
  providedIn: 'root'
})
export class SigamMeService {
  dataSource: SigaMe[] = [{ nome: 'Sigame-1', tipo: 'Permanene', categoria: 'Total', status: 'Aberto', ramal: '6001', destino: '6099' }];
  constructor() { }

  getSigaMe() {
    return this.dataSource
  }
}
