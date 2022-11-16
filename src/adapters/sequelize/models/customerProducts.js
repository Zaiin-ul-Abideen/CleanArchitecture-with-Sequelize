import Sequelize from "sequelize";

const options = {
  tableName: "customerProducts",
};

const definition = {
  customerProductID: {
    field: "customerProductID",
    allowNull: false,
    autoincrement: true,
    type: Sequelize.DataTypes.INTEGER,
  },
};

export default (sequelize) => {
  return sequelize.define("customerProducts", definition, options);
};
