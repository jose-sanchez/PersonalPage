import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinanceSymbolComponent } from './binance-symbol.component';

describe('BinanceSymbolComponent', () => {
  let component: BinanceSymbolComponent;
  let fixture: ComponentFixture<BinanceSymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinanceSymbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinanceSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
