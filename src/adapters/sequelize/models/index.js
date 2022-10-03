import customer from "./customer";

// const customer = require("./customer");

export default (sequelize) => ({
  customer: customer(sequelize),
});
