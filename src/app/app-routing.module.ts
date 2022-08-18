import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'product999', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
 { path: 'category', loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule) },
 { path: 'shopmaster', loadChildren: () => import('./pages/shopformr/shopformr.module').then(m => m.ShopformrModule) },
 { path: 'testpage2', loadChildren: () => import('./pages/testpage2/testpage2.module').then(m => m.Testpage2Module) },
 { path: 'testpage3', loadChildren: () => import('./pages/testpage3/testpage3.module').then(m => m.Testpage3Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
