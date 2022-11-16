import { Container } from "inversify";
import { CustomerInterface } from "../application/interfaces/customerInterface/customerInterface";
import { CustomersAdapter } from "../adapters/customerAdapter/customersAdapter";

import { ProductInterface } from "../application/interfaces/productInterface/productInterface";
import {ProductsAdapter} from '../adapters/productAdapter/productsAdapter'

const container = new Container({ autoBindInjectable: true });

(function (): void {
  container.bind(CustomerInterface).to(CustomersAdapter);
  container.bind(ProductInterface).to(ProductsAdapter);
})();

export default container;
