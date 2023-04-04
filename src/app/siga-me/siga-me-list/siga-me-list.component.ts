import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SigaMe } from '../model/siga-me';

@Component({
  selector: 'app-siga-me-list',
  templateUrl: './siga-me-list.component.html',
  styleUrls: ['./siga-me-list.component.scss']
})
export class SigaMeListComponent {
  @Input() sigaMeList: SigaMe[] = [];
  @Output() eventList = new EventEmitter(false);
  displayedColumns = ['nome', 'tipo', 'categoria', 'status', 'ramal', 'destino', 'actions'];

  constructor() { }

  onAddList() {
    console.log('onAddList');
    this.eventList.emit(true);
  }
}
