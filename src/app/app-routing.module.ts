import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StakeholderComponent } from './stakeholder/stakeholder.component';

const routes: Routes = [
  { path: '/stakeholder', component: StakeholderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
