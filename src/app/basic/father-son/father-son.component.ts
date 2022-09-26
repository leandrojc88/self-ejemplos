import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../model';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.scss'],
})
export class FatherSonComponent {
  @Input() client?: Client;
  @Output() onDeleteClient = new EventEmitter();
  @Output() onUpdatedClient = new EventEmitter<Client>();

  onDelete() {
    this.client = undefined;
    this.onDeleteClient.emit();
  }

  onUpdate(id: number) {
    if (!this.client) return;

    this.client = { ...this.client, id };
    this.onUpdatedClient.emit(this.client);
  }
}
