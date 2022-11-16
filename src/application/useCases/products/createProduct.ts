import { inject, injectable } from "inversify";
import { ProductInterface } from "../../interfaces/productInterface/productInterface";

@injectable()
export class CreateProduct {
  @inject(ProductInterface) productInterface!: ProductInterface;

  async execute(data?: any): Promise<void> {
    return this.productInterface.createProduct(data);
  }
}
