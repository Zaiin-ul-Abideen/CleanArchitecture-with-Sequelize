import type { Customer } from "../../models/customers";

export const CustomerInterface = Symbol("interfaces.customers");

export interface CustomerInterface {
  getAllCustomer(): Promise<Customer[]>;

  createCustomer(data?: any): Promise<void>;
}
