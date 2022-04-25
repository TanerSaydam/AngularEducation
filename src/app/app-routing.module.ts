import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { BasketsComponent } from './ui/components/baskets/baskets.component';
import { HomeComponent } from './ui/components/home/home.component';
import { ProductsComponent } from './ui/components/products/products.component';

const routes: Routes = [
  {path:'admin',component:LayoutComponent, children: [
    {path:'customers', loadChildren: () => import("./admin/components/customer/customer.module").then(module=> module.CustomerModule)},
    {path:'products', loadChildren: ()=> import("./admin/components/products/products.module").then(module=> module.
      ProductsModule)},
    {path:'orders', loadChildren: ()=> import("./admin/components/order/order.module").then(module=> module.OrderModule)},
    {path:'', component:DashboardComponent},
  ]},
  { path:'',component:HomeComponent},
  {path: 'products', loadChildren: ()=> import("./ui/components/products/products.module").then(module=> module.ProductsModule)},
  {path: 'baskets', loadChildren: ()=> import("./ui/components/baskets/baskets.module").then(module=> module.BasketsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
