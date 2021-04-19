import { Component } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

import { Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/state/app.state';
import { getSpinnerStatus } from './store/shared/shared.selectors';
import { toggleSpinner } from 'src/app/store/shared/shared.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showSpinner$: Observable<boolean>;

  constructor(private router: Router, private store: Store<State>) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });

    // Sets initial value to true to show loading spinner on first load
    this.showSpinner$ = this.store.select(getSpinnerStatus);
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.store.dispatch(toggleSpinner({ status: true }));
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this.store.dispatch(toggleSpinner({ status: false }));
      }, 1000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.store.dispatch(toggleSpinner({ status: false }));
    }
    if (event instanceof NavigationError) {
      this.store.dispatch(toggleSpinner({ status: false }));
    }
  }
}
