import Sequelize from "sequelize";

const options = {
  tableName: "customers",
 
};

const definition = {
  customerName: {
    field: "customerName",
    allowNull: false,
    type: Sequelize.DataTypes.STRING(400),
  },
  customerEmail: {
    field: "customerEmail",
    allowNull: false,
    type: Sequelize.DataTypes.STRING(400),
  },
  customerPhone: {
    field: "customerPhone",
    allowNull: true,
    type: Sequelize.DataTypes.STRING(400),
  },
  customerAddress: {
    field: "customerAddress",
    allowNull: true,
    type: Sequelize.DataTypes.STRING(400),
  },
};

export default (sequelize) => {
  return sequelize.define("customers", definition, options);
};
