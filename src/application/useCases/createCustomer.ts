import { inject, injectable } from "inversify";
import { CustomerInterface } from "../interfaces/customerInterface";
import type { Customer } from "../../models/customers";

@injectable()
export class CreateCustomer {
  @inject(CustomerInterface) customerInterface!: CustomerInterface;

  async execute(

    data?:any

  ): Promise<void> {
    return this.customerInterface.createCustomer(data);
  }
}
