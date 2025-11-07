import { Product } from "./product";

export interface CartItem extends Product {
  cartQuantity: number;
}
