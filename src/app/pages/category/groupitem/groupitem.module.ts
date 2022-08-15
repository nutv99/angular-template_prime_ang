import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupitemRoutingModule } from './groupitem-routing.module';
import { GroupitemComponent } from './groupitem.component';


@NgModule({
  declarations: [
    GroupitemComponent
  ],
  imports: [
    CommonModule,
    GroupitemRoutingModule
  ]
})
export class GroupitemModule { }
