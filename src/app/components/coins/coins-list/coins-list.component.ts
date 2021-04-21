import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Coin } from '../coin';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinsListComponent {
  title = 'CURRENCY CONVERTER';

  @Input() coins: Coin[];
  @Input() selectedCoin: Coin;
  @Input() showEntries: number;

  @Output() coinWasSelected = new EventEmitter<Coin>();
  @Output() displayEntriesChanged = new EventEmitter<number>();

  coinSelected(coin: Coin): void {
    this.coinWasSelected.emit(coin);
  }

  onChange(event): void {
    this.displayEntriesChanged.emit(event.target.value);
  }
}
