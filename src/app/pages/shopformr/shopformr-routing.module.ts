import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopformrComponent } from './shopformr.component';

const routes: Routes = [{ path: '', component: ShopformrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopformrRoutingModule { }
