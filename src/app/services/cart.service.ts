import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICarts } from '../models/cart';
import { IProducts } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3001/cart';

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<ICarts[]> {
    return this.http.get<ICarts[]>(this.apiUrl);
  }
  addToCart(product: IProducts): Observable<ICarts> {
    return this.http.post<ICarts>(this.apiUrl, product);
  }
}