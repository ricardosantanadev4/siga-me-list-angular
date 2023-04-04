import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { SigaMe } from '../model/siga-me';
import { SigamMeService } from '../services/sigam-me.service';

@Component({
  selector: 'app-siga-me',
  templateUrl: './siga-me.component.html',
  styleUrls: ['./siga-me.component.scss']
})
export class SigaMeComponent {
  // dataSource: SigaMe[] = [{ nome: '', tipo: '', categoria: '', status: '', ramal: '', destino: '' }];
  dataSource$: Observable<SigaMe[]>;

  constructor(private sigameService: SigamMeService, public dialog: MatDialog, private router: Router
    , private route: ActivatedRoute) {

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

  onAdd() {
    console.log('onAdd')
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}