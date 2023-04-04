import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigaMeFormComponent } from './siga-me-form/siga-me-form.component';
import { SigaMeComponent } from './siga-me/siga-me.component';

const routes: Routes = [
  { path: '', component: SigaMeComponent },
  { path: 'new', component: SigaMeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigaMetRoutingModule { }
