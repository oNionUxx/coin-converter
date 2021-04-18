import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Coin } from '../coin';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getCoins } from '../state';
import { CoinsPageActions } from '../actions';
import { CoinService } from '../service/coin.service';

@Component({
  selector: 'app-coins-shell',
  templateUrl: './coins-shell.component.html',
})
export class CoinsShellComponent implements OnInit {
  messageErr$;
  coins$: Observable<Coin[]>;

  // Used to highlight the selected product in the list
  selectedCoin$: Observable<Coin>;

  constructor(private store: Store<State>, private coinService: CoinService) {}

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.coins$ = this.store.select(getCoins);

    this.store.dispatch(CoinsPageActions.loadCoins());

    // this.coinService.coinsWithIcons$.subscribe(console.log);
    // this.coinService.coins$.subscribe(console.log);
  }
}
