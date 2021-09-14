import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { MaterialModule } from '../shared/material/material.module';
import { MatIconModule } from '@angular/material/icon';

import { CustomerComponent } from './customer/customer.component';
import { DialogConfirmation } from './customer/customer.component';
import { DialogInformation } from './customer/customer.component';
import { SnackbarSuccess } from './customer/customer.component';

@NgModule({
  declarations: [
    CustomerComponent,
    DialogConfirmation,
    DialogInformation
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    MatIconModule
  ]
})
export class StakeholdersModule { }
