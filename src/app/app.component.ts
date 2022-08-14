import {Component} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from "primeng/api";
import { PanelModule } from 'primeng/panel';
import { SelectItem } from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';


/** @title Form field appearance variants */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})


export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig) {}

}



/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */