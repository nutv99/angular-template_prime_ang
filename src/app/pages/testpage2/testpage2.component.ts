import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import {ChipsModule} from 'primeng/chips';

@Component({
  selector: 'app-testpage2',
  templateUrl: './testpage2.component.html',
  styleUrls: ['./testpage2.component.scss']
})
export class Testpage2Component implements OnInit {

  selectedCities: string[] = [];
  selectedCategories: any[] = ['Technology', 'Sports'];
  categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
  checked: boolean = false; 
  // values2 = 'Mitchai' ;
  values2: string[];


  constructor() { }

  ngOnInit(): void {
    this.selectedCategories = this.categories.slice(1, 3);
  }

}
