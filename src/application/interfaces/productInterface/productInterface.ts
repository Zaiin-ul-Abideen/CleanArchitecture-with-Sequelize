import type { Product } from "@models/products";

export const ProductInterface = Symbol("interfaces.products");

export interface ProductInterface {
  getAllProduct(): Promise<Product[]>;

  getProductById(productKey?: string): Promise<Product>;

  updateProductById(
    productKey: string,
    updateProductByid: Partial<Product>
  ): Promise<void>;

  deleteProductById(productKey?: string): Promise<Product>;

  createProduct(data?: any): Promise<void>;
}
