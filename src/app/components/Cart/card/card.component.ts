import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: IProducts[] = [];
  selectedProduct: IProducts | null = null;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct(): void {
    this.productService.getListProduct().subscribe(data => {
      this.products = data;
    });
  }

  showProductDetails(product: IProducts): void {
    this.selectedProduct = product;
  }

  addToCart(product: IProducts): void {
    this.cartService.addToCart(product)
      .subscribe(cartItem => {
        alert('Sản phẩm đã được thêm vào giỏ hàng');
      });
  }
}
