import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  category!: any[]
  constructor(
    private categoryServices: CategoryService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.categoryServices.getAllCategory().subscribe(data => {
      this.category= data
    })
  }
  onHandleRemove(id:any){

  }
}
