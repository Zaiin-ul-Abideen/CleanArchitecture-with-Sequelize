import { inject, injectable } from "inversify";
import { CustomerInterface } from "../../interfaces/customerInterface/customerInterface";

@injectable()
export class CreateNewOrder {
  @inject(CustomerInterface) customerInterface!: CustomerInterface;

  async execute(data?: any): Promise<void> {
    return this.customerInterface.createNewOrder(data);
  }
}
