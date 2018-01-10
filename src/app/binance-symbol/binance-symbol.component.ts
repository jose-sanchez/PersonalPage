import { Component, OnInit,Input } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { BinanceSymbolPriceService } from '../binance-symbol-price.service';
import { IBinanceSymbol } from '../models/index';
@Component({
  selector: 'app-binance-symbol',
  templateUrl: './binance-symbol.component.html',
  styleUrls: ['./binance-symbol.component.scss'],
  providers:[WebsocketService,BinanceSymbolPriceService]
  
})

export class BinanceSymbolComponent implements OnInit {
 private OportunityLimitPorcentage:number;  
 private StoplostPorcentage:number; 
 private fee:number; 
  
  binanceSymbol:IBinanceSymbol;
  constructor(private priceService: BinanceSymbolPriceService) { 
    this.binanceSymbol = { 
      pair: "trxeth", 
      price: 0, 
      currencyAmount: 1000,
      mainCurrencyAmount: 0,
      benefitAgainstBoughtprice: 0, 
      lastBoughtprice: 0.00009100, 
      benefitAgainstSoldprice: 0, 
      lastSoldprice: 0, 
      maxPrice: 0, 
      minPrice: 0, 
      StrTradingState: "WaitingForOportunity"},
    priceService.connect(this.binanceSymbol.pair);
    priceService.messages.subscribe(data => this.onPriceUpdate(data)); 
    this.OportunityLimitPorcentage = 0.3
    this.StoplostPorcentage = 0.001
    this.fee =0.1; 
 /*  priceService.messages.subscribe(msg => {			
    console.log("Response from websocket: " + msg.toString());
  });  */
  }

  ngOnInit() {
  }

  onPriceUpdate(data)
  {
    
    this.binanceSymbol.price = data.p;
    this.binanceSymbol.benefitAgainstBoughtprice = this.round((this.binanceSymbol.price * 100 / this.binanceSymbol.lastBoughtprice) - 100,4);
    this.binanceSymbol.maxPrice = this.binanceSymbol.benefitAgainstBoughtprice > this.binanceSymbol.maxPrice ? this.binanceSymbol.benefitAgainstBoughtprice : this.binanceSymbol.maxPrice;
    this.binanceSymbol.benefitAgainstSoldprice =  this.round((this.binanceSymbol.price * 100 / this.binanceSymbol.lastSoldprice) - 100, 4);
    this.binanceSymbol.minPrice = this.binanceSymbol.benefitAgainstSoldprice < this.binanceSymbol.minPrice ? this.binanceSymbol.benefitAgainstSoldprice : this.binanceSymbol.minPrice;
    this.UpdateTradingStatus(this.binanceSymbol);
    //console.log("Response from websocket: " + data.p.toString());
  }

  UpdateTradingStatus(binanceSymbol:IBinanceSymbol)
  {
      switch (binanceSymbol.StrTradingState)
      {
          case 'WaitingForOportunity':
              if (binanceSymbol.mainCurrencyAmount == 0)
              {
                  if(this.ShouldBeOpenToSell(binanceSymbol.benefitAgainstBoughtprice,this.OportunityLimitPorcentage))
                  {
                    binanceSymbol.StrTradingState = 'OpenToSell';
                    console.log(binanceSymbol.StrTradingState);
                  }
              }
              else
              {
                  if(this.ShouldBeOpenToBuy(binanceSymbol.benefitAgainstSoldprice,this.OportunityLimitPorcentage))
                  {
                      this.binanceSymbol.StrTradingState = 'OpenToBuy';
                      console.log(binanceSymbol.StrTradingState);
                  }
              }
             
              break;
          case 'OpenToSell':
          if(this.ShouldBeOpenToSell(binanceSymbol.benefitAgainstBoughtprice,this.OportunityLimitPorcentage))
          {
              if(this.ShouldBeSold(binanceSymbol,this.StoplostPorcentage))
              {
                  if(this.Sell(binanceSymbol)){
                    this.binanceSymbol.StrTradingState = 'WaitingForOportunity';
                    console.log(binanceSymbol.StrTradingState);
                  }
                  
              }
          }
          else
          {
            this.binanceSymbol.StrTradingState = 'WaitingForOportunity';
            console.log(binanceSymbol.StrTradingState);
          }
              break;
          case 'OpenToBuy':
          if(this.ShouldBeOpenToBuy(binanceSymbol.benefitAgainstSoldprice,this.OportunityLimitPorcentage))
          {
              if (this.ShouldBeBought(binanceSymbol,this.StoplostPorcentage))
              {
                  if(this.Buy(binanceSymbol)){
                    this.binanceSymbol.StrTradingState = 'WaitingForOportunity';
                    console.log(binanceSymbol.currencyAmount);
                    console.log(binanceSymbol.StrTradingState);
                  }                 
              }
            }  
            else
            {
              this.binanceSymbol.StrTradingState = 'WaitingForOportunity';
              console.log(binanceSymbol.StrTradingState);              
            } 
            break;
      }

  }

  private ShouldBeOpenToSell(benefitAgainstBoughtprice:number, oportunityLimitPorcentage :number):boolean
  {
    if (benefitAgainstBoughtprice > oportunityLimitPorcentage)
    {
          return true;
    }

      return false;
  }

  private ShouldBeSold(symbol:IBinanceSymbol, stoplostPorcentage :number):boolean
  {

      if (symbol.price < symbol.maxPrice * (1 - stoplostPorcentage))
      {
          return true;
      }

      return false;
  }

  private ShouldBeOpenToBuy(benefitAgainstSoldprice:number, oportunityLimitPorcentage :number):boolean
  {
      if (benefitAgainstSoldprice < -1* oportunityLimitPorcentage)
      {
          return true;
      }
      return false;
  }

  private ShouldBeBought(symbol:IBinanceSymbol, stoplostPorcentage :number):boolean
  {

      if (symbol.price > symbol.minPrice * (1 - stoplostPorcentage))
      {
          return true;
      }

      return false;
  }

  private Sell(symbol:IBinanceSymbol):boolean
  {
/*     var orders = client.GetOrderBook(this.Symbol);
    var BidSellPrice = orders.Data.Bids[2];
    Sell(BidSellPrice.Price, CurrencyAmount);
    client.PlaceOrder(Symbol, OrderSide.Sell, OrderType.Limit, TimeInForce.ImmediateOrCancel, CurrencyAmount, sellPrice);
    */ 
    symbol.mainCurrencyAmount = symbol.currencyAmount * symbol.price - (symbol.currencyAmount * symbol.price) * this.fee;
    symbol.currencyAmount = 0;
    symbol.lastSoldprice = symbol.price;
    symbol.minPrice = symbol.lastSoldprice;
    console.log( 'sold ' + symbol.pair +' '+symbol.currencyAmount + ' at price '+ symbol.price + ' get '+ symbol.mainCurrencyAmount + ' of mainCurrency');
    return true;
  }

  Buy(symbol:IBinanceSymbol)
  {
/*     var orders = client.GetOrderBook(this.Symbol);
    var BidSellPrice = orders.Data.Bids[2];
    Sell(BidSellPrice.Price, CurrencyAmount);
  client.PlaceOrder(Symbol, OrderSide.Buy, OrderType.Limit, TimeInForce.GoodTillCancel, CurrencyAmount, price);
    */ 

    symbol.currencyAmount  = symbol.mainCurrencyAmount / symbol.price - (symbol.mainCurrencyAmount / symbol.price )* this.fee;
    symbol.lastBoughtprice = symbol.price;
    symbol.maxPrice = symbol.lastBoughtprice;
    symbol.mainCurrencyAmount = 0;

    console.log( 'bought ' + symbol.pair  +' '+symbol.currencyAmount + ' at price '+ symbol.price);
    
    return true;

  }

  updateLastBoughtPrice(price:number)
  {


  }

  updateLastSoldPrice(price:number)
  {

    
  }

  private round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

}
