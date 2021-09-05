import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadbarComponent } from './layout/headbar/headbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeadbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [HeadbarComponent]
})
export class SharedModule { }
