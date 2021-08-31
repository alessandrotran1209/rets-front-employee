import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchComponent } from './search/search.component';
import { TableDataComponent } from './table-data/table-data.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ModalComponent } from './modal/modal.component';
import { ModalCustomerInfoComponent } from './modal-customer-info/modal-customer-info.component';

@NgModule({
  declarations: [
    SearchComponent,
    TableDataComponent,
    ConfirmationModalComponent,
    ModalComponent,
    ModalCustomerInfoComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
