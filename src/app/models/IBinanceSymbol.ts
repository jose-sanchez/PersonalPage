export interface IBinanceSymbol{
    pair:string,
    price:number,
    lastBoughtprice:number,
    lastSoldprice:number,
    currencyAmount:number,    
    mainCurrencyAmount:number,
    benefitAgainstBoughtprice:number,
    benefitAgainstSoldprice:number,
    maxPrice:number,
    minPrice:number,
    StrTradingState:string
}