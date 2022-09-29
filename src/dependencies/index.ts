import { Container } from "inversify";
import { CustomerInterface } from "../application/interfaces/customerInterface";
import { CustomersAdapter } from "../adapters/customerAdapter/customersAdapter";

const container = new Container({ autoBindInjectable: true });

(function (): void {
  container.bind(CustomerInterface).to(CustomersAdapter);
})();

export default container;
