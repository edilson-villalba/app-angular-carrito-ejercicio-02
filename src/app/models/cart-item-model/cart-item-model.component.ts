import { Product } from "../product/product.component";

export class CartItemModelComponent {

  productId: number;
  productName: string;
  productPrice: number;
  productQuantity: number;

  constructor(product: Product) {
    this.productId = product.id;
    this.productName = product.name;
    this.productPrice = product.price;
    this.productQuantity = 1;
  }
  
}
