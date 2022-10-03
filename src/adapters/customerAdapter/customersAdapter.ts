import { injectable } from "inversify";
import initializeSequelize from '../sequelize'
import type { Customer } from "../../models/customers";
import type { CustomerInterface } from "../../application/interfaces/customerInterface";



@injectable()
export class CustomersAdapter implements CustomerInterface {

  async getAllCustomer(): Promise<Customer[]> {
    const { sequelize } = await initializeSequelize();
    const customerData=sequelize.models.customer.findAll()

        return customerData;

  }

  async createCustomer(data?:any): Promise<void> {

  }




  // async getAllCustomer(): Promise<Customer[]> {
  //   const customerData = await CustomersData.findAll();
  //   console.log("Adapter Working", { customerData });
  //   console.log(JSON.stringify(customerData, null, 2));

  //   return customerData;
  // }

  // async createCustomer(data?:any): Promise<void> {

  //   const create=await CustomersData.create(data)



  //   console.log(create);
  //   console.log("customer created");
  //   console.log(data);
  // }
}
