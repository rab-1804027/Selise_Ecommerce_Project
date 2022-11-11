import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {
    component:DashboardComponent,
    path:''
    
  },
  {
    component:CartComponent,
    path:'cart'
    
  },
  {
    component:ProductsComponent,
    path:'products'
    
  },
  {
    component:AddProductComponent,
    path:'add-product'
  },
  {
    component:UpdateProductComponent,
    path:'update-product/:id'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
