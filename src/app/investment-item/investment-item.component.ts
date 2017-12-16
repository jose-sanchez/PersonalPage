import { Component, OnInit, Input } from '@angular/core';
import { IInvestmentItem } from '../models/index';

@Component({
  selector: 'app-investment-item',
  templateUrl: './investment-item.component.html',
  styleUrls: ['./investment-item.component.scss']
})
export class InvestmentItemComponent implements OnInit {
  @Input() investment:IInvestmentItem;
  constructor() { 
    this.investment = {id:1,dividents:0,initialInvestment:0,investmentType:"t",name:"Roche",reinvestdividents:true,totaldividents:"0",totalInvestment:"0",years:0};

  }

  ngOnInit() {
  
  }
  onInvestmentNameChange(name:string): void {
    this.investment.name = name;
  }
}
