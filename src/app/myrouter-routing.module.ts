import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCustomerComponent } from './pages/form-customer/form-customer.component' ;

const routes: Routes = [
  {path: '/customer', component:FormCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyrouterRoutingModule { }
