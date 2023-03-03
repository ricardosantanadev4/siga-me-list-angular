import { Component } from '@angular/core';
import { SigaMe } from '../model/siga-me';

@Component({
  selector: 'app-siga-me-list',
  templateUrl: './siga-me-list.component.html',
  styleUrls: ['./siga-me-list.component.scss']
})
export class SigaMeListComponent {
  dataSource: SigaMe[] = [{ nome: '', tipo: '', categoria: '', status: '', ramal: '', destino: '' }];
  displayedColumns = ['nome', 'tipo', 'categoria', 'status', 'ramal', 'destino']
}
