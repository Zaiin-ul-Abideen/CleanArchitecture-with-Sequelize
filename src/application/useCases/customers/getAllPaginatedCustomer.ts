import { inject, injectable } from "inversify";
import { CustomerInterface } from "../../interfaces/customerInterface/customerInterface";

import type {
  PaginatedResults,
  PaginatedSearchConfiguration,
} from "../../../utilities/constants/types/pagination";

import type { Customer } from "@models/customers";

@injectable()
export class GetAllPaginatedCustomer {
  @inject(CustomerInterface) userInterface!: CustomerInterface;

  async execute(
    paginationConfig: PaginatedSearchConfiguration<string>
  ): Promise<PaginatedResults<Customer>> {
    return this.userInterface.getAllPaginatedCustomer(paginationConfig);
  }
}
