import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {Injectable} from '@angular/core';
import { InvestmentService } from '../investment.service';
import { IInvestmentItem} from '../models/index';
export const GET_INVESTMENTS = 'investments/GET'
export const REMOVE_INVESTMENTS = 'investments/REMOVE'

@Injectable()
export class InvestmentActions{
    constructor(
        private ngRedux:NgRedux<IAppState>,
        private investmentsService:InvestmentService
    ){  }

  public getInvestments(){
      this.investmentsService.getInvestments()
      .subscribe(investments=>{
          this.ngRedux.dispatch({
            type:GET_INVESTMENTS,
            investments
          });
      });
  }

  public RemoveInvestment(investment:IInvestmentItem){
    this.ngRedux.dispatch({
        type:REMOVE_INVESTMENTS,
        investment
      });
  }
}