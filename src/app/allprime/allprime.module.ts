import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,NoopAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    TriStateCheckboxModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule
  ]
})
export class PrimeNGModule { }
