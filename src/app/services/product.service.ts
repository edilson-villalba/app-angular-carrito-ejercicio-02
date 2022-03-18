import { Injectable } from '@angular/core';
import { Product } from '../models/product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product [] = [
    new Product(1,'FIFA 2022', 'lorem ipsum', 250000, 'https://m.media-amazon.com/images/I/817dIPZKz9L._SL1500_.jpg'),
    new Product(2,'HORIZON', 'lorem ipsum', 413000, 'https://m.media-amazon.com/images/I/81tdRcle46L._SL1500_.jpg'),
    new Product(3,'Grand Theft Auto V', 'lorem ipsum', 161000, 'https://m.media-amazon.com/images/I/61+s8HfeFoL.jpg'),
    new Product(4,'Minecraft Starter', 'lorem ipsum', 250000, 'https://m.media-amazon.com/images/I/71AKO+U6F6L._SL1000_.jpg'),
    new Product(5,'Jump Force Standard Edition', 'lorem ipsum', 250000, 'https://m.media-amazon.com/images/I/817NHyxNUrL._SL1500_.jpg'),
    new Product(6,'Hot Wheels Unleashed', 'lorem ipsum', 250000, 'https://m.media-amazon.com/images/I/71CnlDmbfZL._SL1500_.jpg'),
    new Product(7,'Marvels Spider-Man: Game of The Year', 'lorem ipsum', 250000, 'https://m.media-amazon.com/images/I/814tECNqHBL._SL1500_.jpg'),
    new Product(8,'Dying Light 2 Stay Human', 'lorem ipsum', 250000, 'https://m.media-amazon.com/images/I/71bHmsaYKIL._SL1500_.jpg'),
    new Product(9,'Battlefield 2042', 'lorem ipsum', 250000, 'https://m.media-amazon.com/images/I/71PIucvgepL._SL1286_.jpg'),
    new Product(10,'NBA 2K22 - PlayStation 4', 'lorem ipsum', 250000, 'https://m.media-amazon.com/images/I/814IztfQ5LL._SL1500_.jpg')
  ]
  constructor() { }

  getProducts(): Product []{
    return this.products;
  }
}
