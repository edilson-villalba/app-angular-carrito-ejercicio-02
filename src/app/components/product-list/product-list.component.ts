import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listProducts: Product[] = [];
  constructor(private productSVC: ProductService) { }

  ngOnInit(): void {
    this.getListProdcuts();
  }

  getListProdcuts():void{
    this.listProducts = this.productSVC.getProducts();
  }
}
