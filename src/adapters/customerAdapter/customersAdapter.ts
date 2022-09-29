// import Sequelize from 'sequelize';
// import { NextFunction, Request, Response } from "express";
// import mongoose from "mongoose";

// import type { Customer } from "../../models/customers";
import type { Customer } from "../../models/customers";

import { injectable } from "inversify";
import { CustomerInterface } from "../../application/interfaces/customerInterface";
const db = require("../sequelize/models");
const CustomersData = db.customer;

@injectable()
export class CustomersAdapter implements CustomerInterface {
  async getAllCustomer(): Promise<Customer[]> {
    const customerData = await CustomersData.findAll();
    console.log("Adapter Working", { customerData });
    console.log(JSON.stringify(customerData, null, 2));

    return customerData;
  }

  async createCustomer(data?:any): Promise<void> {

    const create=await CustomersData.create(data)



    console.log(create);
    console.log("customer created");
    console.log(data);
  }
}
