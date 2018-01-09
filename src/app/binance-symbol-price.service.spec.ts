import { TestBed, inject } from '@angular/core/testing';

import { BinanceSymbolPriceService } from './binance-symbol-price.service';

describe('BinanceSymbolPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BinanceSymbolPriceService]
    });
  });

  it('should be created', inject([BinanceSymbolPriceService], (service: BinanceSymbolPriceService) => {
    expect(service).toBeTruthy();
  }));
});
