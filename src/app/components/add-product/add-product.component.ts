import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {  
  product: IProducts = {
    name: "",
    img: "",
    description: "",
    author: "",
    category: "",
    price: 0,
    sale: 0,
    quantity: 0,
    status: true
  }
  productList!: IProducts
  constructor(
    private productServices: ProductService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.paramMap.get("id")
    if(id){
      this.productServices.getProduct(id).subscribe(data => this.product = data)
    }
  }

  onSubmit() {
    const id = this.activedRoute.snapshot.paramMap.get("id")
    if(id){
      this.productServices.editProduct(this.product).subscribe(data => {
        this.router.navigateByUrl("admin/products")
      })
    }
    else{
      this.productServices.createProduct(this.product).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("admin/products")
    })
    }
   
  }
}
