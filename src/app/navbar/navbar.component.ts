import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() cartProducts: Product[] = [];
  finalTotal = 0;

  // This function calculates the total of elements present in teh cart checkout
  calculateTotal(): number {
    let cartTotal: number = 0;
    for(let product of this.cartProducts){
        cartTotal += product.price;
    }
    return cartTotal;
  }
  // This function get the calculated checkout total
  checkout() {
    this.finalTotal = this.calculateTotal();
  }

}
