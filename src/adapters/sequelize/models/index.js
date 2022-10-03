import customer from "./customer";

export default (sequelize) => ({
  customer: customer(sequelize),
});
