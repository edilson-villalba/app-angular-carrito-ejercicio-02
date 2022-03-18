import { Component, Input, OnInit } from '@angular/core';
import { CartItemModelComponent } from 'src/app/models/cart-item-model/cart-item-model.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
 @Input() cartItem!: CartItemModelComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
