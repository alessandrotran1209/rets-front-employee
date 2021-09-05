import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { HeadbarComponent } from './shared/layout/headbar/headbar.component';

import { MaterialModule } from './shared/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadbarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
