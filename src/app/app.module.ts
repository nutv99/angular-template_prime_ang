import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { PrimeNGModule } from './allprime/allprime.module';
// import { FormFieldAppearanceExample } from './form-field-appearance-example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainRouteModule } from './main-route/main-route.module';

import { FormCustomerComponent } from './pages/form-customer/form-customer.component';


@NgModule({
  declarations: [AppComponent, MainpageComponent,FormCustomerComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    PrimeNGModule,
    MainRouteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
