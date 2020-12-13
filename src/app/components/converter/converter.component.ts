import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../../services/coins-service/coins.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency } from '../../models/Currency';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  currencies: Currency[] = [{ asset_id: 'ILS' }, { asset_id: 'USD' }, { asset_id: 'EUR' }];
  cryptoCoins: Currency[] = [];
  coinsNames: any[];

  converterForm: FormGroup;

  amountValue: number = 1;
  fromCoin: string = 'ILS';
  toCoin: string = 'BTC';
  result: string = '';
  fromIcon: string = `../../../assets/images/ILS.png`;
  toIcon: string = 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4caf2b16a0174e26a3482cea69c34cba.png';

  fromAssetName: any = 'Israeli New Shekel';
  toAssetName: any = 'Bitcoin';
  rate: any;
  isSwitched: boolean = false;

  constructor(private formBuilder: FormBuilder, private coinsService: CoinsService) {}

  ngOnInit(): void {
    this.initConverterForm();
    this.getAssetsIcons();
    this.getAssetName();
    this.getExchange();
  }

  initConverterForm(): void {
    this.converterForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
      from: [''],
      to: [''],
    });

    this.converterForm.controls.amount.setValue(1);
  }

  // Get all assets icons
  getAssetsIcons() {
    this.coinsService.getAssetsIcons().subscribe((coins: Currency[]) => {
      this.cryptoCoins = coins;
    });
  }

  // Get the current exchange 'from' Coin --> 'to' Coin rate asset
  getExchange() {
    this.coinsService.getExchange(this.fromCoin, this.toCoin).subscribe((data: any) => {
      this.rate = data.rate;
    });
  }

  // Get the current coin name
  getAssetName() {
    return this.coinsService.getAssetsName().subscribe((data) => {
      this.coinsNames = data;
    });
  }

  onChangeFrom(event) {
    this.fromCoin = event.target.value;
    // If switch between 'from' input and 'to' has occurred
    if (this.isSwitched) {
      this.fromIcon = this.currencies.find((curr) => curr.asset_id === this.fromCoin).url;
    } else {
      this.fromIcon = `../../../assets/images/${this.fromCoin}.png`;
    }
    this.fromAssetName = this.coinsNames.filter((curr) => curr.asset_id === this.fromCoin)[0].name;
    this.getExchange();
  }

  onChangeTo(event) {
    this.toCoin = event.target.value;
    // If switch between 'from' input and 'to' has occurred
    if (this.isSwitched) {
      this.toIcon = `../../../assets/images/${this.toCoin}.png`;
    } else {
      this.toIcon = this.cryptoCoins.find((curr) => curr.asset_id === this.toCoin).url;
    }
    this.toAssetName = this.coinsNames.filter((curr) => curr.asset_id === this.toCoin)[0].name;
    this.getExchange();
  }

  onKeyInput(event) {
    this.amountValue = event.target.value;
    this.getExchange();
  }

  onSwap() {
    let tmp: any;

    // Swap 'from list coins' & 'to' list coins
    tmp = this.cryptoCoins;
    this.cryptoCoins = this.currencies;
    this.currencies = tmp;

    // swap 'from' icon coin && 'to' icon coin;
    tmp = this.fromIcon;
    this.fromIcon = this.toIcon;
    this.toIcon = tmp;

    // swap 'from' asset id coin && 'to' asset id coin
    tmp = this.fromCoin;
    this.fromCoin = this.toCoin;
    this.toCoin = tmp;

    // swap 'from' asset name coin && 'to' asset name coin
    tmp = this.fromAssetName;
    this.fromAssetName = this.toAssetName;
    this.toAssetName = tmp;

    this.isSwitched = !this.isSwitched;
    this.getExchange();
  }
}
