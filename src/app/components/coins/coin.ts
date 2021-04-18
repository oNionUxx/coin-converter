export interface Coin {
  asset_id: string;
  name: string;
  id_icon: string;
  price_usd: number;
  icon: Icon;
  data_end?: string;
  data_orderbook_end?: string;
  data_orderbook_start?: string;
  data_quote_end?: string;
  data_quote_start?: string;
  data_start?: string;
  data_symbols_count?: string;
  data_trade_end?: string;
  data_trade_start?: string;
  type_is_crypto?: number;
  volume_1day_usd?: number;
  volume_1hrs_usd?: number;
  volume_1mth_usd?: number;
}

export interface Icon {
  asset_id: string;
  url: string;
}
