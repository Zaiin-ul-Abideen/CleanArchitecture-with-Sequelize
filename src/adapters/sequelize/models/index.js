import customer from "./customer";
import product from "./product";
import customerProducts from "./customerProducts";

export default (sequelize) => ({
  customer: customer(sequelize),
  product: product(sequelize),
  customerProducts: customerProducts(sequelize),
});
