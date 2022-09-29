import type { Customer } from "../../models/customers";

export const CustomerInterface = Symbol("interfaces.customers");

export interface CustomerInterface {
  //createCustomer(): Promise<void>;
  //getCustomer(id: string): Promise<Customer>;
  getAllCustomer(): Promise<Customer[]>;
  
  createCustomer(
    data?:any
  ): Promise<void>;
}
