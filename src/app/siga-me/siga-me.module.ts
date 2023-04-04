import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { SigaMeFormComponent } from './siga-me-form/siga-me-form.component';
import { SigaMeComponent } from './siga-me/siga-me.component';
import { SigaMetRoutingModule } from './siga-me-routing.module';
import { SigaMeListComponent } from './siga-me-list/siga-me-list.component';


@NgModule({
  declarations: [
    SigaMeComponent,
    SigaMeFormComponent,
    SigaMeListComponent
  ],
  imports: [
    CommonModule,
    SigaMetRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class SigaMeModule { }
