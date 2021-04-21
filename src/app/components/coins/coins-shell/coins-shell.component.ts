import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Coin } from '../coin';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getCoins, showEntries, getCurrentCoin } from '../state';
import { CoinsPageActions } from '../actions';

@Component({
  selector: 'app-coins-shell',
  templateUrl: './coins-shell.component.html',
})
export class CoinsShellComponent implements OnInit {
  messageErr$;
  coins$: Observable<Coin[]>;
  selectedCoin$: Observable<Coin>;
  showEntries$: Observable<number>;

  // Used to highlight the selected product in the list

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.coins$ = this.store.select(getCoins);
    this.selectedCoin$ = this.store.select(getCurrentCoin);
    this.showEntries$ = this.store.select(showEntries);

    this.store.dispatch(CoinsPageActions.loadCoins());
  }

  coinSelected(coin: Coin): void {
    this.store.dispatch(CoinsPageActions.setCurrentCoin({ currentCoinId: coin.asset_id }));
  }

  checkEntriesChanged(entries: number): void {
    this.store.dispatch(CoinsPageActions.showEntries({ entries }));
  }
}
