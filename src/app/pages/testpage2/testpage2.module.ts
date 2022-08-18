import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Testpage2RoutingModule } from './testpage2-routing.module';
import { Testpage2Component } from './testpage2.component';
import { CheckboxModule } from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';

@NgModule({
  declarations: [
    Testpage2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    ChipsModule,
    Testpage2RoutingModule,
    
    
  ]
})
export class Testpage2Module { }
