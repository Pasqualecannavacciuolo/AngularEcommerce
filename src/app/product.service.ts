import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getById(id: any): Observable<any> {
    const url = `http://localhost:8080/api/v1/${id}`;
    return this.http.get(url);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
