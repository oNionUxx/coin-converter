import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coin } from '../coin';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinsListComponent implements OnInit {
  title = 'CURRENCY CONVERTER';

  @Input() coins: Coin[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  coinSelected(coin: Coin): void {}
}
