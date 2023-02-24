import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigaMeListComponent } from './siga-me-list/siga-me-list.component';

const routes: Routes = [
  { path: '', component: SigaMeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigaMeListRoutingModule { }
