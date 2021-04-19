import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  title = 'Coin Converter App';

  constructor() {}
}
