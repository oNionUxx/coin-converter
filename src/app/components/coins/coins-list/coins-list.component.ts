import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../service/coins.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency } from '../../../models/currency';
import { Coin } from '../../../models/coin';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css'],
})
export class CoinsListComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private coinsService: CoinsService) {}

  ngOnInit(): void {}
}
