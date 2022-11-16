import Sequelize from "sequelize";

const options = {
  tableName: "products",
};

const definition = {
  id: {
    // field: "id",
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.DataTypes.INTEGER,
  },

  productName: {
    field: "productName",
    allowNull: false,
    unique: true,
    type: Sequelize.DataTypes.STRING(20),
  },
  productPrice: {
    field: "productPrice",
    allowNull: false,
    type: Sequelize.DataTypes.STRING(20),
  },
};

export default (sequelize) => {
  return sequelize.define("products", definition, options);
};
