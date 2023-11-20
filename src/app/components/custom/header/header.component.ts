import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products!: IProducts[];
  searchTerm: string = '';
  filteredProducts!: IProducts[]
  constructor(
    private productService: ProductService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getListProduct().subscribe(products => {
      this.products = products;
    });
  }
  search() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.author.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  addToCart(product: IProducts): void {
    this.cartService.addToCart(product);
    alert("Đã thêm sản phẩm vào giỏ hàng")
  }
}
