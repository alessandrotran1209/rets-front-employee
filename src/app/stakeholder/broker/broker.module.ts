import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrokerComponent } from './broker.component';
import { BrokerSearchComponent } from './broker-search/broker-search.component';
import { TableDataBrokerComponent } from './table-data-broker/table-data-broker.component';
import { ModalBrokerComponent } from './modal-broker/modal-broker.component';
import { ModalBrokerInfoComponent } from './modal-broker-info/modal-broker-info.component';


@NgModule({
  declarations: [
    BrokerComponent,
    BrokerSearchComponent,
    TableDataBrokerComponent,
    ModalBrokerComponent,
    ModalBrokerInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BrokerComponent]
})
export class BrokerModule { }
