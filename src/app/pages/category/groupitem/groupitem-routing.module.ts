import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupitemComponent } from './groupitem.component';

const routes: Routes = [{ path: '', component: GroupitemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupitemRoutingModule { }
