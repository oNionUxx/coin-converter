import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './components/home/shell/shell.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'coins',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./components/coins/coin.module').then((m) => m.CoinModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
