import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  selectedCities: string[] = [];
  selectedCategories: any[] = ['Technology', 'Sports'];
  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];

  checked: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.selectedCategories = this.categories.slice(1, 3);
  }
}
