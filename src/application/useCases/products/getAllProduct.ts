import { inject, injectable } from "inversify";
// import { ProductInterface } from "../../interfaces/productInterface/productInterface";
import { ProductInterface } from "../../interfaces/productInterface/productInterface";
import type { Product } from "@models/products";

@injectable()
export class GetAllProduct {
  @inject(ProductInterface) productInterface!: ProductInterface;

  async execute(): Promise<Product[]> {
    return this.productInterface.getAllProduct();
  }
}
