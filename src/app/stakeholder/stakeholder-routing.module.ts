import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerComponent } from './broker/broker.component';
import { CustomerComponent } from './customer/customer.component';
import { InvestorComponent } from './investor/investor.component';

const routes: Routes = [
  { path: '/customer', component: CustomerComponent },
  { path: '/broke', component: BrokerComponent },
  { path: '/investor', component: InvestorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
