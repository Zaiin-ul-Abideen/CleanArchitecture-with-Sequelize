/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Customer } from "../../models/customers";
// import  {CustomerSchema } from "../../models/customers";

import { injectable } from "inversify";
import type { CustomerInterface } from "../../application/interfaces/customerInterface";
import getSequelizeContext from "../sequelize";

// import initializeSequelize from '../sequelize/initializeSequelize'

@injectable()
export class CustomersAdapter implements CustomerInterface {
  async getAllCustomer(): Promise<Customer[]> {
    
    const { sequelize } = await getSequelizeContext();
    
    const customerData = await sequelize.models.customers.findAll();

    // console.log(customerData);
    return customerData;
  }

  async createCustomer(data?: any): Promise<void> {
    // async getAllCustomer(): Promise<Customer[]> {
    //   const customerData = await CustomersData.findAll();
    //   console.log("Adapter Working", { customerData });
    //   console.log(JSON.stringify(customerData, null, 2));

    console.log(data);

    //   return customerData;
  }

  // async createCustomer(data?:any): Promise<void> {

  //   const create=await CustomersData.create(data)

  //   console.log(create);
  //   console.log("customer created");
  //   console.log(data);
  // }
}
