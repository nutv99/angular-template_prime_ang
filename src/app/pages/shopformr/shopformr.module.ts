import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopformrRoutingModule } from './shopformr-routing.module';
import { ShopformrComponent } from './shopformr.component';


@NgModule({
  declarations: [
    ShopformrComponent
  ],
  imports: [
    CommonModule,
    ShopformrRoutingModule
  ]
})
export class ShopformrModule { }
