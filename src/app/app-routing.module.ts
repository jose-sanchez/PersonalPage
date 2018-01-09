import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentPortfolioComponent}      from './investment-portfolio/investment-portfolio.component'
import { PersonalDashboardComponent}      from './personal-dashboard/personal-dashboard.component';
import { InvestmentItemComponent}      from './investment-item/investment-item.component';
import { BinanceTradingHelperComponent}      from './binance-trading-helper/binance-trading-helper.component';

BinanceTradingHelperComponent

const routes: Routes = [
  { path: '', redirectTo: '/personalDashBoard', pathMatch: 'full' },
  { path: 'personalDashBoard',component: PersonalDashboardComponent },
  { path: 'investmentPortfolio',component: InvestmentPortfolioComponent },
  { path: 'investmentItem',component: InvestmentItemComponent },
  { path: 'binanceTradingHelper',component: BinanceTradingHelperComponent },
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
}) 
export class AppRoutingModule {}
