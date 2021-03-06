/* Core Modules  */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';

/* Components */
import { AppComponent } from './app.component';
import { ShellComponent } from './components/home/shell/shell.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/state/app.state';

/* Environment */
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, ShellComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Coin-Convert-App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
