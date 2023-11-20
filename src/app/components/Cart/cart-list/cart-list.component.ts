import { Component, OnInit } from '@angular/core';
import { ICarts } from 'src/app/models/cart';
import { IProducts } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products: IProducts[] = [];
  cartItems: ICarts[] = [];
  totalPrice: number = 0;
  product!: IProducts;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartService.getCartItems().subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.getTotalPrice();
    });
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  }
}