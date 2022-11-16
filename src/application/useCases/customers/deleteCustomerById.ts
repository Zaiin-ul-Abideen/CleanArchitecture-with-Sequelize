import { inject, injectable } from "inversify";
import { CustomerInterface } from "../../interfaces/customerInterface/customerInterface";
import type { Customer } from "@models/customers";

@injectable()
export class DeleteCustomerById {
  @inject(CustomerInterface) customerInterface!: CustomerInterface;

  async execute(customerKey: string): Promise<Customer> {
    return this.customerInterface.deleteCustomerById(customerKey);
  }
}
