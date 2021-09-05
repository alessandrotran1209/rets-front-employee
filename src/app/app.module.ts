import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeadbarComponent } from './headbar/headbar.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
