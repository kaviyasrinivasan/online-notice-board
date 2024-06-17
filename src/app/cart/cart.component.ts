// src/app/cart/cart.component.ts

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

interface Product {
  id: number;
  name: string;
  date: string;
  venue:string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  product!: Product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cart = this.cartService.getCart(); 
  }
}
