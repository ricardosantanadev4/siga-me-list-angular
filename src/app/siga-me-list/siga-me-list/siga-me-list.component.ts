import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SigaMe } from '../model/siga-me';
import { SigamMeService } from '../services/sigam-me.service';

@Component({
  selector: 'app-siga-me-list',
  templateUrl: './siga-me-list.component.html',
  styleUrls: ['./siga-me-list.component.scss']
})
export class SigaMeListComponent {
  // dataSource: SigaMe[] = [{ nome: '', tipo: '', categoria: '', status: '', ramal: '', destino: '' }];
  dataSource$: Observable<SigaMe[]>;
  displayedColumns = ['nome', 'tipo', 'categoria', 'status', 'ramal', 'destino']

  constructor(private sigameService: SigamMeService) {
    // this.sigameService.getSigaMe().subscribe(sigaMe => this.dataSource = sigaMe);
    this.dataSource$ = this.sigameService.getSigaMe();
  }

}
