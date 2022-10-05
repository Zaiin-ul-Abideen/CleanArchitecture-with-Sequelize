import type { Customer } from "../../models/customers";

export const CustomerInterface = Symbol("interfaces.customers");

export interface CustomerInterface {
  getAllCustomer(): Promise<Customer[]>;

  getCustomerById(customerKey?: string): Promise<Customer>;
  
  updateCustomerById(customerKey: string, updateCustomerByid:Partial<Customer>): Promise<void>;
  
  deleteCustomerById(customerKey?: string): Promise<Customer>;

  createCustomer(data?: any): Promise<void>;
}
