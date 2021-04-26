import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersHostComponent } from './customers-host/customers-host.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersHostComponent,
    CustomersListComponent,
    CustomersDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
