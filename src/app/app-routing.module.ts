import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentPortfolioComponent}      from './investment-portfolio/investment-portfolio.component'
import { PersonalDashboardComponent}      from './personal-dashboard/personal-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/personalDashBoard', pathMatch: 'full' },
  { path: 'personalDashBoard',component: PersonalDashboardComponent },
  { path: 'investmentPortfolio',component: InvestmentPortfolioComponent },
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
}) 
export class AppRoutingModule {}
