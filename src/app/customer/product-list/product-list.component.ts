import { Component, OnInit } from '@angular/core';
import { IPay } from 'src/app/models/pay';
import { IProducts } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: IProducts[];
  cartItems: IProducts[] = [];
  selectedProduct: IProducts | null = null;
  paymentInfo: IPay = {
    name: '',
    email: '',
    address: ''
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getListProduct().subscribe(products => {
      this.products = products;
    });
  }
  showProductDetails(products: IProducts) {
    this.selectedProduct = products;
  }
  addToCart(product: IProducts) {
    this.cartItems.push(product);
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  submitPayment() {
    this.cartItems = [];
    this.paymentInfo = {
      name: '',
      email: '',
      address: ''
    };
  }
}
