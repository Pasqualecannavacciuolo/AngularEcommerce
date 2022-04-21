import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product | undefined;
  
  constructor( private router: Router, private route: ActivatedRoute, private productService: ProductService) {
  }


  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.loadProduct();
  }

  

  loadProduct() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getById(productId)
    .subscribe(
      data => {
        this.product = data
        
      });
  }

}
