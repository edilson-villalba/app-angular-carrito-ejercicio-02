import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product.component';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product!: Product;
  constructor(private messageSVC: MessageService) { }

  ngOnInit(): void {
  
  }
  addToCart():void{
    this.messageSVC.sendMessage(this.product);
  }
}
