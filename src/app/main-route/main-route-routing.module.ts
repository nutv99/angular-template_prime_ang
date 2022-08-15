import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormCustomerComponent} from '../pages/form-customer/form_customer.component'

const routes: Routes = [
  {path: 'shop', component:FormCustomerComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRouteRoutingModule { }
