import products from "../data/products.json";

export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  thumbnail?: string;
}
