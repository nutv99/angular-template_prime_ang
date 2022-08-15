import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopMaster} from '../pages/shopmaster.component.'

const routes: Routes = [
  {path: 'shop', component:ShopMaster },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRouteRoutingModule { }
