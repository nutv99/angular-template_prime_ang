import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Testpage3RoutingModule } from './testpage3-routing.module';
import { Testpage3Component } from './testpage3.component';


@NgModule({
  declarations: [
    Testpage3Component
  ],
  imports: [
    CommonModule,
    Testpage3RoutingModule
  ]
})
export class Testpage3Module { }
