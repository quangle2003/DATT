import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './list-category/list-category.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    AppRoutingModule,
    NzButtonModule
  ]
})
export class CategoryModule { }
