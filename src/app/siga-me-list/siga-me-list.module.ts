import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigaMeListRoutingModule } from './siga-me-list-routing.module';
import { SigaMeListComponent } from './siga-me-list/siga-me-list.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { SigaMeFormComponent } from './siga-me-form/siga-me-form.component';


@NgModule({
  declarations: [
    SigaMeListComponent,
    SigaMeFormComponent
  ],
  imports: [
    CommonModule,
    SigaMeListRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class SigaMeListModule { }
