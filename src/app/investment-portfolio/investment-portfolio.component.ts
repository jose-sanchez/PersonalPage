import { Component, OnInit } from '@angular/core';
import { IInvestmentItem } from '../models/IInvestmentItem';
import { Observable } from 'rxjs';
import {NgRedux,select} from 'ng2-redux';
import { InvestmentActions } from './investment-portfolio.actions';
import {IAppState } from '../store'
@Component({
  selector: 'app-investment-portfolio',
  templateUrl: './investment-portfolio.component.html',
  styleUrls: ['./investment-portfolio.component.scss']
})
export class InvestmentPortfolioComponent implements OnInit {
 
  @select((state)=> state.investments) investmentList$: Observable<IInvestmentItem>
  constructor(private ngRedux:NgRedux<IAppState>,private investmentListActions:InvestmentActions) {

   }

  ngOnInit() {
        //with NG redux -- This action will refresh the content of all exercise variables
        this.investmentListActions.getInvestments();
        console.log(this.investmentList$.count);
  }

  
  onRemoveClick(investment:IInvestmentItem): void {
    this.investmentListActions.RemoveInvestment(investment);
    console.log(investment);
  }

  onAddClick(): void {
    let investment:IInvestmentItem = { id: 1, dividents: 0, initialInvestmentAmount: 0, initialInvestmentPrice: 0, investmentType: "Housing", name: "", reinvestdividents: false, totaldividents: "0", totalInvestment: "0", years: 0 };
    this.investmentListActions.AddInvestment(investment);
    console.log(investment);
  }
}
