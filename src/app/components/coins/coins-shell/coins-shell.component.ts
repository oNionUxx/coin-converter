import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getCoins } from '../state';
import { CoinsPageActions } from '../actions';

@Component({
  selector: 'app-coins-shell',
  templateUrl: './coins-shell.component.html',
})
export class CoinsShellComponent implements OnInit {
  coins$: Observable<any[]>;

  // Used to highlight the selected product in the list
  selectedCoin$: Observable<any>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.coins$ = this.store.select(getCoins);

    this.store.dispatch(CoinsPageActions.loadCoins());
  }
}
