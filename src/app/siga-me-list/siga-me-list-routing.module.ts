import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigaMeFormComponent } from './siga-me-form/siga-me-form.component';
import { SigaMeListComponent } from './siga-me-list/siga-me-list.component';

const routes: Routes = [
  { path: '', component: SigaMeListComponent },
  { path: 'new', component: SigaMeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigaMeListRoutingModule { }
