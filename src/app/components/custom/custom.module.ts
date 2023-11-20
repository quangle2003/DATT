import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { IntroComponent } from './intro/intro.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PayComponent } from './pay/pay.component';



@NgModule({
  declarations: [
    CategoryComponent,
    IntroComponent,
    ProductDetailComponent,
    PayComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CustomModule { }
