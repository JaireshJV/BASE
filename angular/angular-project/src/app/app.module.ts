import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from "./app";
import {  Employees } from "./employees/employees";



@NgModule({
  declarations:  [],
  imports: [
    App,
    BrowserModule,
    Employees       // ✅ import standalone component
  ],

})
export class AppModule {}
