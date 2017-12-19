import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Bootstrap Modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LinkedImageComponent } from './linked-image/linked-image.component';
import { PersonalDashboardComponent } from './personal-dashboard/personal-dashboard.component';
import { InvestmentPortfolioComponent } from './investment-portfolio/investment-portfolio.component';
import { ClickEditInputComponent } from './click-edit-input/click-edit-input.component';
import { InvestmentItemComponent } from './investment-item/investment-item.component';
import {NgReduxModule,NgRedux} from 'ng2-redux';
import {store,IAppState} from './store';

@NgModule({
  declarations: [
    AppComponent,
    LinkedImageComponent,
    PersonalDashboardComponent,
    InvestmentPortfolioComponent,
    ClickEditInputComponent,
    InvestmentItemComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    //  !! this constructor is required to wire up NGRedux with Angular
    constructor(ngRedux:NgRedux<IAppState>)
    {
      ngRedux.provideStore(store);
    }
 }
