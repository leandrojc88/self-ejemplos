import { Component, OnInit } from '@angular/core';
import { Client } from '../model';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss'],
})
export class FatherComponent implements OnInit {
  public client?: Client;

  constructor() {}

  ngOnInit(): void {}

  onSetClient(name: string) {
    this.client = { id: 1, name };
  }
}
