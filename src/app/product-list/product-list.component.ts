import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

  constructor(private router: Router, private productService: ProductService, private http: HttpClient) {
    this.getAll()
  }

  
  productList: Product[] = [];
  @Input() showDetails: boolean = false;

  getAll() {
    return this.http
      .get<Product[]>('http://localhost:8080/api/v1')
      .subscribe((result) => {
        this.productList = result;
      });
  }// Fine GETALL

  addToCart = (tmpProduct: Product) => {
    this.productService.addToCart(tmpProduct);
    window.alert('Your product has been added to the cart!');
  }

  gotoProductDetails = (url: any, id: any) => {
    let myurl = `${url}/${id}`;
    this.router.navigate([myurl]).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
    this.showDetails = true;
}
  

}


