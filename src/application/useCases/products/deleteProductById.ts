import { inject, injectable } from "inversify";
import { ProductInterface } from "../../interfaces/productInterface/productInterface";
import type { Product } from "@models/products";

@injectable()
export class DeleteProductById {
  @inject(ProductInterface) productInterface!: ProductInterface;

  async execute(productKey: string): Promise<Product> {
    return this.productInterface.deleteProductById(productKey);
  }
}
