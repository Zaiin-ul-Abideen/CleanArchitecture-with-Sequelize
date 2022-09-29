import { inject, injectable } from "inversify";
import { CustomerInterface } from "../interfaces/customerInterface";
import type { Customer } from "../../models/customers";

@injectable()
export class GetAllCustomer {
  @inject(CustomerInterface) customerInterface!: CustomerInterface;

  async execute(): Promise<Customer[]> {
    return this.customerInterface.getAllCustomer();
  }
}
