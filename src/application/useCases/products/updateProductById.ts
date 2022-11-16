import { inject, injectable } from "inversify";
import { ProductInterface } from "../../interfaces/productInterface/productInterface";
// import { ProductInterface } from "@interfaces/productInterface";
// import type { Product } from "../../models/products";
import type { Product } from "@models/products";

@injectable()
export class UpdateProductById {
  @inject(ProductInterface) productInterface!: ProductInterface;

  async execute(
    productKey: string,
    updateProductByid: Partial<Product>
  ): Promise<void> {
    return this.productInterface.updateProductById(
      productKey,
      updateProductByid
    );
  }
}
