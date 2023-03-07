import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
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

  constructor(private sigameService: SigamMeService, public dialog: MatDialog) {
    // this.sigameService.getSigaMe().subscribe(sigaMe => this.dataSource = sigaMe);
    this.dataSource$ = this.sigameService.getSigaMe().pipe(
      catchError(error => {
        console.log(error);
        this.openDialog('Erro ao carregar recursos.');
        return of([]);
      },
      )
    );
  }

  openDialog(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg,
    });
  }
}
