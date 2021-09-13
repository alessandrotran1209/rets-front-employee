import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerComponent } from './customer/customer.component';
import { BrokerComponent } from './broker/broker.component';
import { InvestorComponent } from './investor/investor.component';
import { AppRoutingModule  } from './stakeholder-routing.module';

import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    RouterModule
  ]
})
export class StakeholderModule { }
