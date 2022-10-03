import { inject, injectable } from "inversify";
import { CustomerInterface } from "../interfaces/customerInterface";

@injectable()
export class CreateCustomer {
  @inject(CustomerInterface) customerInterface!: CustomerInterface;

  async execute(data?: any): Promise<void> {
    return this.customerInterface.createCustomer(data);
  }
}
