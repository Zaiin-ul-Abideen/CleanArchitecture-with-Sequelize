import { inject, injectable } from "inversify";
import { CustomerInterface } from "../../interfaces/customerInterface";
import type { Customer } from "@models/customers";

@injectable()
export class GetCustomerById {
  @inject(CustomerInterface) customerInterface!: CustomerInterface;

  async execute(customerKey: string): Promise<Customer> {
    return this.customerInterface.getCustomerById(customerKey);
  }
}
