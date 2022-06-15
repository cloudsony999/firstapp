import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { ArrayserviceService } from './arrayservice.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ArrayserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
