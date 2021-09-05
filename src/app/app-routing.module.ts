import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './stakeholder/customer/customer.component';
import { BrokerComponent } from './stakeholder/broker/broker.component';
import { InvestorComponent } from './stakeholder/investor/investor.component';
import { ProjectComponent } from './product/project/project.component';
import { InvestmentProductComponent } from './product/investment-product/investment-product.component';

const routes: Routes = [
  { path: 'customer',  component: CustomerComponent},
  { path: 'broker',  component: BrokerComponent},
  { path: 'investor',  component: InvestorComponent},
  { path: 'project',  component: ProjectComponent},
  { path: 'investment',  component: InvestmentProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
