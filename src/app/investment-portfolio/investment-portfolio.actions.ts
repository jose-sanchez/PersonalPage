import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {Injectable} from '@angular/core';
import { InvestmentService } from '../investment.service';
export const GET_INVESTMENTS = 'investments/GET'

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
}