import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinanceTradingHelperComponent } from './binance-trading-helper.component';

describe('BinanceTradingHelperComponent', () => {
  let component: BinanceTradingHelperComponent;
  let fixture: ComponentFixture<BinanceTradingHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinanceTradingHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinanceTradingHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
