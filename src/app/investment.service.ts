import { Injectable } from '@angular/core';
//Is important to specify the path so that just the specific code is load and the size of the request is smaller
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { mergeMap } from 'rxjs/operator/mergeMap'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of'
import { IInvestmentItem } from './models'
//For method getInvestmentsHttpModule
import { Http, Response } from '@angular/http';
const investmentUrl = "http://swapi.co/api/people/"
const investmentNodeJsApiUrl = "http://localhost:3000/API/investments/"

@Injectable()
export class InvestmentService {

    //constructor(private _htpp: Http) { }
    constructor() { }

    public getInvestments(): Observable<IInvestmentItem[]>{

        let investmentList: Array<IInvestmentItem> = null;
        investmentList = [{ id: 1, dividents: 0, initialInvestmentAmount: 0, initialInvestmentPrice: 0, investmentType: "Housing", name: "Roche", reinvestdividents: true, totaldividents: "0", totalInvestment: "0", years: 0 },
        { id: 1, dividents: 0, initialInvestmentAmount: 0, initialInvestmentPrice: 0, investmentType: "Housing", name: "Nestle", reinvestdividents: true, totaldividents: "0", totalInvestment: "0", years: 0 },
        { id: 1, dividents: 0, initialInvestmentAmount: 0, initialInvestmentPrice: 0, investmentType: "Housing", name: "Roche AG", reinvestdividents: true, totaldividents: "0", totalInvestment: "0", years: 0 },];
        return Observable.of(investmentList);
    }

    //ExampleCallApi - needs refactoring
    public getInvestmentsObservableHttpRequest() {
        return Observable.create(observer => {
            let request = new XMLHttpRequest();
            request.addEventListener("load", () => {
                let data = JSON.parse(request.responseText);
                let i = 0;
                console.log(data.results);
                observer.next(data.results);

            })

            request.open("GET", investmentUrl);
            request.send();
        });
    }
    //ExampleCallApi - needs refactoring
    public getInvestmentsHttpModule(): Observable<IInvestmentItem[]> {
        return
        //this._htpp.get (investmentNodeJsApiUrl).pipe(map(res:Response)=> res.json().results)
        /*     .pipe(map(res:Response)=> res.json().results), catchError(this.handleError)) */
    };

    handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json.error || 'Server Error');
    }
}
