import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CoinsShellComponent } from './coins-shell/coins-shell.component';
import { CoinsListComponent } from './coins-list/coins-list.component';
import { CoinsInfoComponent } from './coins-info/coins-info.component';

/* Services */
import { CoinService } from './service/coin.service';

/* Interceptors */
import { HttpApiKeyInterceptorService } from '../../components/coins/service/http-apiKey-interceptor/http-api-key-interceptor.service';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { coinReducer } from './state/coins.reducer';
import { CoinEffect } from './state/coins.effects';

const coinsRoutes: Routes = [{ path: '', component: CoinsShellComponent }];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(coinsRoutes),
    StoreModule.forFeature('coins', coinReducer),
    EffectsModule.forFeature([CoinEffect]),
  ],
  declarations: [CoinsShellComponent, CoinsListComponent, CoinsInfoComponent],
  providers: [
    CoinService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpApiKeyInterceptorService,
      multi: true,
    },
  ],
})
export class CoinModule {}
