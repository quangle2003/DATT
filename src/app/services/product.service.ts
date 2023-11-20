import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `http://localhost:3001/products/`
  constructor(
    private http :HttpClient
  ) { }

  getListProduct(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(`${this.API_URL}`)
  }
  getProduct(id:any): Observable<IProducts>{
    return this.http.get<IProducts>(`${this.API_URL}/${id}`)
  }
  createProduct(product:IProducts):Observable<IProducts>{
    return this.http.post<IProducts>(`${this.API_URL}`, product)
  }
  removeProduct(id:any):Observable<IProducts>{
    return this.http.delete<IProducts>(`${this.API_URL}/${id}`)
  }
  editProduct(product:IProducts): Observable<IProducts>{
    return this.http.put<IProducts>(`${this.API_URL}/${product.id}`, product)
  }
  searchProducts(query: string): Observable<IProducts[]> {
    const searchUrl = `${this.API_URL}?q=${query}`;
    return this.http.get<IProducts[]>(searchUrl);
  }
}
