import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: IProducts
  constructor(
    private activatedRoute: ActivatedRoute,
    private servicesProduct: ProductService
    ) {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.servicesProduct.getProduct(id).subscribe(data=>{
      this.product = data
    })
   }
   

  ngOnInit(): void {
  }

}
