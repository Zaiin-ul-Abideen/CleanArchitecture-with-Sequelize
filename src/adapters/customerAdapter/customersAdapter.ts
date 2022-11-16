import type { Customer } from "../../models/customers";
import { CustomerSchema } from "../../models/customers";

import { injectable } from "inversify";
import type { CustomerInterface } from "@interfaces/customerInterface/customerInterface";
import getSequelizeContext from "../sequelize";
import { Transaction, Op } from "sequelize";
import type {
  PaginatedResults,
  PaginatedSearchConfiguration,
} from "../../utilities/constants/types/pagination";
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

  async getAllPaginatedCustomer(
    paginationConfig: PaginatedSearchConfiguration<string>
  ): Promise<PaginatedResults<Customer>> {
    const { sequelize } = await getSequelizeContext();
    const { page, limit, search } = paginationConfig;

    const customerData = await sequelize.models.customers.findAndCountAll({
      offset: (page - 1) * limit,
      limit: limit,
      where: {
        customerName: { [Op.like]: `%${search}%` },
      },

      // raw: true,
    });

    // return customerData;

    // const customers = customerData.map((sequelizeCustomer: any) => {
    //   CustomerSchema.validateSync(sequelizeCustomer);
    //   console.log("Maps ==> ", sequelizeCustomer);

    //   return sequelizeCustomer;
    // });

    const paginationResults = {
      totalRecords: customerData.count,
      totalPages: Math.ceil(customerData.count / limit),
      currentPage: page,
      results: customerData,
    };

    return paginationResults;
  }

  async getCustomerById(customerKey: string): Promise<Customer> {
    const { sequelize } = await getSequelizeContext();
    // const customerData = await sequelize.models.customers.findByPk(customerKey);
    // if (!customerData) {
    //   throw new Error("Invalid customer id");
    // }
    // CustomerSchema.validateSync(customerData);

    // const customerData = await sequelize.models.customers.findOne({
    //   where: {
    //   id: customerKey,
    // },
    //   include: [
    //     {
    //       model: sequelize.models.customerProducts,
    //     },
    //     sequelize.models.products,
    //   ],
    // });

    console.log(customerKey);
    const customerData = await sequelize.models.customerProducts.findAll({
      where: {
        customerId: customerKey,
      },
      include: [
        {
          model: sequelize.models.customers,
        },
        sequelize.models.products,
      ],
    });

    const map_function = customerData.map((elements: any) => {
      return [
        {
          "Customer ID": elements.customer.id,
          "Customer Name": elements.customer.customerName,
          "Product ID": elements.product.id,
          "Product Name": elements.product.productName,
        },
      ];
    });

    // const reduce_function = Object.values(customerData).reduce(
    // const reduce_function = customerData.reduce(
    //   (
    //     acc: any,
    //     value:any,

    //     {
    //       customer: { id: customerID, customerName },
    //       product: { id: productID, productName },
    //     }: any
    //   ) => {
    //     const {customer,product}=value
    //     const customer = { customerID, customerName, productID, productName };
    //     acc.push(customer);
    //     return acc;
    //     acc["CustomerID"] = customer.id;
    //     acc["CustomerName"] = customer.customerName;
    //     acc["Product ID"] = product.id;
    //     acc["Product Name"] = product.productName;
    //     acc["Product Price"] = product.productPrice;

    //     return acc;
    //   },
    //   []
    // );

    // short and precise

    // customer=

    // if()

    console.log("reduce Function: ", map_function);

    return customerData;
  }

  async updateCustomerById(
    customerKey: string,
    updateCustomerByid: Partial<Customer>
  ): Promise<void> {
    const { sequelize } = await getSequelizeContext();

    await CustomerSchema.validate(updateCustomerByid);
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
  }

  async deleteCustomerById(customerKey: string): Promise<Customer> {
    const { sequelize } = await getSequelizeContext();
    const customerData = await sequelize.models.customers.destroy({
      where: {
        id: customerKey,
      },
    });
    if (!customerData) {
      throw new Error("Invalid customer id");
    }

    return customerData;
  }

  async createCustomer(data?: any): Promise<void> {
    const { sequelize } = await getSequelizeContext();

    try {
      await CustomerSchema.validate(data);
      const create = await sequelize.models.customers.create(data);

      console.log(create);
    } catch (error: any) {
      console.log("Error found in Adapters: ", error.message);
    }
  }

  async createNewOrder(data?: any): Promise<void> {
    const { sequelize } = await getSequelizeContext();

    await sequelize.transaction(async (transaction: Transaction) => {
      const isEntryExist = await sequelize.models.customerProducts.findOne(
        {
          where: {
            customerId: data.params,
          },
        },
        { transaction }
      );

      console.log(isEntryExist);

      if (isEntryExist) {
        const del = await sequelize.models.customerProducts.destroy(
          {
            where: {
              customerId: data.params,
            },
          },
          { transaction }
        );

        console.log(del);
      }

      console.log(data);
      const entries = data.productId;
      const orders = entries.map((order: any) => {
        return {
          productId: order,
          customerId: data.params,
        };
      });

      await sequelize.models.customerProducts.bulkCreate(orders, {
        transaction,
      });
    });
  }
}

//player 1 = 'X' & player 2='O'
//reset
//if winner is X or O board should be disabled
//column ,rows and diagnol

//Ticktak toe
//closures
//deboucing
