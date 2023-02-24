import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigaMeListRoutingModule } from './siga-me-list-routing.module';
import { SigaMeListComponent } from './siga-me-list/siga-me-list.component';


@NgModule({
  declarations: [
    SigaMeListComponent
  ],
  imports: [
    CommonModule,
    SigaMeListRoutingModule
  ]
})
export class SigaMeListModule { }
