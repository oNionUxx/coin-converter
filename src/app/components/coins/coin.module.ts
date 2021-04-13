import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoinsShellComponent } from './coins-shell/coins-shell.component';
import { CoinsListComponent } from './coins-list/coins-list.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import {  } from './state/coins.reducer'
// import { ProductEffects } from './state/coins.effects';

@NgModule({
  imports: [
    //SharedModule,
    //RouterModule.forChild(productRoutes),
    //StoreModule.forFeature('coins', coinReducer),
    //EffectsModule.forFeature([ProductEffects]),
  ],

  declarations: [CoinsShellComponent, CoinsListComponent],
})
export class CoinModule {}
