import { Routes } from '@angular/router';
import { HomeComponent } from './webpage/components/home/home.component';
import { ProductComponent } from './webpage/components/product/product.component';
import { CategoryComponent } from './webpage/components/category/category.component';
import { CheckOutComponent } from './webpage/components/check-out/check-out.component';
import { AboutComponent } from './webpage/components/about/about.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'category',component:CategoryComponent},
    {path:'checkout',component:CheckOutComponent},
    {path:'about',component:AboutComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
