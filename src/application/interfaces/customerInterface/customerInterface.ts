import type { Customer } from "@models/customers";
import type {
  PaginatedResults,
  PaginatedSearchConfiguration,
} from "../../../utilities/constants/types/pagination";

export const CustomerInterface = Symbol("interfaces.customers");

export interface CustomerInterface {
  getAllCustomer(): Promise<Customer[]>;

  getAllPaginatedCustomer(
    paginationConfig: PaginatedSearchConfiguration<string>
  ): Promise<PaginatedResults<Customer>>;

  getCustomerById(customerKey?: string): Promise<Customer>;

  updateCustomerById(
    customerKey: string,
    updateCustomerByid: Partial<Customer>
  ): Promise<void>;

  deleteCustomerById(customerKey?: string): Promise<Customer>;

  createCustomer(data?: any): Promise<void>;

  createNewOrder(data?: any): Promise<void>;
}
