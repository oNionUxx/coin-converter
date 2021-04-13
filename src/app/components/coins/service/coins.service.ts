import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from '../../../models/currency';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://rest.coinapi.io/v1';
  }

  getAssetsName(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.baseUrl}/assets`);
  }

  getAssetsIcons(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.baseUrl}/assets/icons/32`);
  }

  getExchangeRate(from: string, to: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/exchangerate/${from}/${to}?`);
  }
}
