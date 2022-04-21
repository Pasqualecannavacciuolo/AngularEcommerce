import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'AngularEcommerce';

  showDetails: boolean = false;
  //productList: Product[] = [];

  
  constructor(private productService: ProductService) {
  }

  cartProducts: Product[] = this.productService.getItems();
  
  

}
