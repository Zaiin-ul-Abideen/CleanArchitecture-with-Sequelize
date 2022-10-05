import Sequelize from "sequelize";

const options = {
  tableName: "customers",
};

const definition = {
  customerName: {
    field: "customerName",
    allowNull: false,
    type: Sequelize.DataTypes.STRING(20),
  },
  customerEmail: {
    field: "customerEmail",
    allowNull: false,
    type: Sequelize.DataTypes.STRING(20),
  },
  customerPhone: {
    field: "customerPhone",
    allowNull: false,
    type: Sequelize.DataTypes.STRING(11),
  },
  customerAddress: {
    field: "customerAddress",
    allowNull: false,
    type: Sequelize.DataTypes.STRING(20),
  },
};

export default (sequelize) => {
  return sequelize.define("customers", definition, options);
};
