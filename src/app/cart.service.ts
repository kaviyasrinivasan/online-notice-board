// src/app/cart.service.ts
/*import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  date: string;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  removeFromCart(product: Product) {
    throw new Error('Method not implemented.');
  }
  getCart(): Product[] {
    throw new Error('Method not implemented.');
  }
  private items: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
}*/


import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  date: string;
  venue:string;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getCart(): Product[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }

  removeFromCart(product: Product): void {
    this.items = this.items.filter(item => item.id !== product.id);
  }
}
