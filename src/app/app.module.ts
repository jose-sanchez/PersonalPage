import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Bootstrap Modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LinkedImageComponent } from './linked-image/linked-image.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkedImageComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
