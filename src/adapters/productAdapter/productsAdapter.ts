/*  eslint-disable @typescript-eslint/no-explicit-any */
import type { Product } from "../../models/products";
import { ProductSchema } from "../../models/products";

import { injectable } from "inversify";
import type { ProductInterface } from "@interfaces/productInterface/productInterface";
import getSequelizeContext from "../sequelize";

@injectable()
export class ProductsAdapter implements ProductInterface {
  async getAllProduct(): Promise<Product[]> {
    const { sequelize } = await getSequelizeContext();

    const productData = await sequelize.models.products.findAll();

    try {
      const users = productData.map((sequelizeUser: any) => {
        ProductSchema.validateSync(sequelizeUser);

        return sequelizeUser;
      });

      return users;
    } catch (error) {
      console.log(error);
    }
    return productData;
  }

  async getProductById(productKey: string): Promise<Product> {
    console.log("Product id is: ", productKey);
    const { sequelize } = await getSequelizeContext();
    const productData = await sequelize.models.products.findByPk(productKey);
    if (!productData) {
      throw new Error("Invalid product id");
    }
    ProductSchema.validateSync(productData);

    return productData;
  }

  async updateProductById(
    productKey: string,
    updateProductByid: Partial<Product>
  ): Promise<void> {
    console.log("Product id is: ", productKey);
    const { sequelize } = await getSequelizeContext();

    await ProductSchema.validate(updateProductByid);
    const productData = await sequelize.models.products.update(
      updateProductByid,
      {
        where: {
          id: productKey,
        },
      }
    );

    if (!productData) {
      throw new Error("Invalid product id");
    }
    console.log(productData);
  }

  async deleteProductById(productKey: string): Promise<Product> {
    console.log("Product id is: ", productKey);
    const { sequelize } = await getSequelizeContext();
    const productData = await sequelize.models.products.destroy({
      where: {
        id: productKey,
      },
    });
    if (!productData) {
      throw new Error("Invalid product id");
    }

    return productData;
  }

  async createProduct(data?: any): Promise<void> {
    const { sequelize } = await getSequelizeContext();

    console.log("run create product");
    try {
      console.log(data);
      await ProductSchema.validate(data);
      const create = await sequelize.models.products.create(data);
      // const orderCreate = await sequelize.models.orders.create([
      //   { productId: 39, customerId: 2 },
      //   // { productId: 1, customerId: 1 },
      //   // { productId: 3, customerId: 1 },
      //   // { productId: 1, customerId: 1 },
      //   // { productId: 3, customerId: 1 },
      //   // 1, 1,
      // ]);

      console.log(create);
      // console.log(orderCreate);
      console.log("product created");
      console.log(data);
    } catch (error: any) {
      console.log("🤬🤬 Error found: ", error.message);
    }
  }

  




}

// Transactions Method

// await sequelize.transaction(async (transaction: Transaction) => {
//   const createdUser = await sequelize.models.users.create(newUser, {
//     transaction,
//     raw: true,
//   });

//   const createdUserKey = createdUser.key;

//   await this.createDefaultUserPermissions(
//     createdUserKey,
//     roleKey,
//     transaction
//   );

//   await sequelize.models.gal_agents.create(
//     {
//       id: createdUserKey,
//     },
//     {
//       transaction,
//       raw: true,
//     }
//   );
// });
