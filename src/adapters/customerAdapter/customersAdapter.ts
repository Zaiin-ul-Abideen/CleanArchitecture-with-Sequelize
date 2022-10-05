/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Customer } from "../../models/customers";
import { CustomerSchema } from "../../models/customers";

import { injectable } from "inversify";
import type { CustomerInterface } from "../../application/interfaces/customerInterface";
import getSequelizeContext from "../sequelize";
// import sequelize from "../sequelize";

// import initializeSequelize from '../sequelize/initializeSequelize'

@injectable()
export class CustomersAdapter implements CustomerInterface {
  async getAllCustomer(): Promise<Customer[]> {
    const { sequelize } = await getSequelizeContext();

    const customerData = await sequelize.models.customers.findAll();

    try {
      const users = customerData.map((sequelizeUser: any) => {
        CustomerSchema.validateSync(sequelizeUser);

        return sequelizeUser;
      });

      return users;
    } catch (error) {
      console.log(error);
    }
    return customerData;
  }

  async getCustomerById(customerKey: string): Promise<Customer> {
    console.log("Customer id is: ", customerKey);
    const { sequelize } = await getSequelizeContext();
    const customerData = await sequelize.models.customers.findByPk(customerKey);
    if (!customerData) {
      throw new Error("Invalid customer id");
    }
    CustomerSchema.validateSync(customerData);

    return customerData;
  }

  async updateCustomerById(
    customerKey: string,
    updateCustomerByid: Partial<Customer>
  ): Promise<void> {
    console.log("Customer id is: ", customerKey);
    const { sequelize } = await getSequelizeContext();

    const customerData = await sequelize.models.customers.update(
      updateCustomerByid,
      {
        where: {
          id: customerKey,
        },
      }
    );

    if (!customerData) {
      throw new Error("Invalid customer id");
    }
    console.log(customerData);

    // CustomerSchema.validateSync(customerData);
  }

  async deleteCustomerById(customerKey: string): Promise<Customer> {
    console.log("Customer id is: ", customerKey);
    const { sequelize } = await getSequelizeContext();
    const customerData = await sequelize.models.customers.destroy({
      where: {
        id: customerKey,
      },
    });
    if (!customerData) {
      throw new Error("Invalid customer id");
    }
    // CustomerSchema.validateSync(customerData);

    return customerData;
  }

  async createCustomer(data?: any): Promise<void> {
    const { sequelize } = await getSequelizeContext();

    console.log("run create customer");
    try {
      await CustomerSchema.validate(data);
      const create = await sequelize.models.customers.create(data);

      console.log(create);
      console.log("customer created");
      console.log(data);
    } catch (error: any) {
      // console.log("phone length is: ", data.customerPhone.length);
      console.log("Error found: ", error.message);
    }
  }
}
