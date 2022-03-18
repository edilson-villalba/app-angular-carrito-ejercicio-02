import { Component, OnInit } from '@angular/core';
import { CartItemModelComponent } from 'src/app/models/cart-item-model/cart-item-model.component';
import { Product } from 'src/app/models/product/product.component';
import { MessageService } from 'src/app/services/message.service';
import { StorageService } from 'src/app/services/storage.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total = 0;
  listItems = Array();
  constructor(
    private messageSVC: MessageService,
    private localstorageSVC: StorageService) { }

  ngOnInit(): void {
   if (this.localstorageSVC.existsCart()) {
      this.listItems = this.localstorageSVC.getCart();
    }
    this.getItem();
    this.total = this.getTotal();
  }

  getItem(): void {
    this.messageSVC.getMessage().subscribe((product: Product) => {
      const itemCart = new CartItemModelComponent(product);
      let exists = false;
      this.listItems.forEach(item => {
        if (item.productId === product.id) {
          exists = true;
          item.productQuantity++;
        }
      });
      if (!exists) {
        const itemCart = new CartItemModelComponent(product);
        this.listItems.push(itemCart);
      }
      this.total = this.getTotal();
      this.localstorageSVC.setCart(this.listItems);
    });
    
  }

  getTotal(): number {
    let total = 0;

    this.listItems.forEach(item => {
      total += (item.productQuantity * item.productPrice);
    });
    this.localstorageSVC.setCart(this.listItems);
    return + total.toFixed(2);
  }

  emptyCart(): void {
    this.listItems = [];
    this.total = 0;
    this.localstorageSVC.setCart(this.listItems);
  }

  getList(): CartItemModelComponent[] {
    return this.listItems;
    
  }

  deleteItem(i: number): void {
    if (this.listItems[i].productQuantity > 1) {
      this.listItems[i].productQuantity--;
      this.total = this.getTotal();
      this.localstorageSVC.setCart(this.listItems);
    } else {
      this.listItems.splice(i, 1);
      this.localstorageSVC.setCart(this.listItems);
    }
  }
}
