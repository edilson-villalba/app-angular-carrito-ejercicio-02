import { Injectable } from '@angular/core';
import { CartItemComponent } from '../components/cart-item/cart-item.component';
import { CartItemModelComponent } from '../models/cart-item-model/cart-item-model.component';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  existsCart(): boolean {
    return localStorage.getItem('cart') != null;
  }

  setCart(cart: CartItemModelComponent[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
      }

  getCart():CartItemComponent[]{
    return JSON.parse(localStorage.getItem('cart')!);
  }

  clear():void{
    localStorage.removeItem('cart');
  }
}
