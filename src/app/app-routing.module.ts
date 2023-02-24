import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'siga-me-list' },
  {
    path: 'siga-me-list',
    loadChildren: () => import('./siga-me-list/siga-me-list.module').then(m => m.SigaMeListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
