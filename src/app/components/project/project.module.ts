import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './list-project/list-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListProjectComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    AppRoutingModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    NzButtonModule
    ]
})
export class ProjectModule { }
