import { Component, OnInit } from '@angular/core';
import { IInvestmentItem } from '../models/IInvestmentItem';

@Component({
  selector: 'app-investment-portfolio',
  templateUrl: './investment-portfolio.component.html',
  styleUrls: ['./investment-portfolio.component.scss']
})
export class InvestmentPortfolioComponent implements OnInit {
  investment :IInvestmentItem;
  private investmentList: IInvestmentItem[];
  
  constructor() {
    this.investment= {id:1,dividents:0,initialInvestmentAmount:0,initialInvestmentPrice:0,investmentType:"t",name:"Roche",reinvestdividents:true,totaldividents:"0",totalInvestment:"0",years:0};
    this.investmentList = [];
    this.investmentList.push(this.investment);
    this.investmentList.push(this.investment);
    this.investmentList.push(this.investment);


   }

  ngOnInit() {
  }

}
