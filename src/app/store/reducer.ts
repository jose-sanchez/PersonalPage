import { IAppState } from './IAppState';
import { IInvestmentItem } from '../models';
import { GET_INVESTMENTS,REMOVE_INVESTMENTS,ADD_INVESTMENTS } from '../investment-portfolio/investment-portfolio.actions'

//Initial State before implementing calls to Api
const InitialInvestments:IInvestmentItem[] =
[
    {"id":1,
    "dividents":0,
    "initialInvestmentAmount":0,
    "initialInvestmentPrice":0,
    "investmentType":"t",
    "name":"Roche",
    "reinvestdividents":true,
    "totaldividents":"0",
    "totalInvestment":"0",
    "years":0}
        ];

        
const InitialState: IAppState =
    {
        investments: InitialInvestments
    }
//---------------------------------------------------

function storeInvestments(state,action):IAppState
{
    return Object.assign({},state,{
        investments:action.investments

    })
}

function removeInvestment(state,action):IAppState
{
    return Object.assign({},state,{
        investments: state.investments.filter(obj => obj !== action.investment),

    })
}

function addInvestment(state,action):IAppState
{
    return Object.assign({},state,{
        investments: [...state.investments,action.investment],

    })
}
export function reducer(state=InitialState,action){
    switch(action.type){
       case GET_INVESTMENTS:
        return storeInvestments(state,action);
        case REMOVE_INVESTMENTS:
        return removeInvestment(state,action);
        case ADD_INVESTMENTS:
        return addInvestment(state,action);
        default:
        return state;
    }
}