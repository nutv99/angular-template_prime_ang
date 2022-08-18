import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Testpage2Component } from './testpage2.component';

const routes: Routes = [{ path: '', component: Testpage2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Testpage2RoutingModule { }
