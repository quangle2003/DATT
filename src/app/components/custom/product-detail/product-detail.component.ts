import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: IProducts[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
