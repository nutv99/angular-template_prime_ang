import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Testpage3Component } from './testpage3.component';

const routes: Routes = [{ path: '', component: Testpage3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Testpage3RoutingModule { }
