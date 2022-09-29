module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define("customer", {
    customerName: {
      field: "customerName",
      allowNull: false,
      type: DataTypes.STRING(400),
    },
    customerEmail: {
      field: "customerEmail",
      allowNull: false,
      type: DataTypes.STRING(400),
    },
    customerPhone: {
      field: "customerPhone",
      allowNull: true,
      type: DataTypes.STRING(400),
    },
    customerAddress: {
      field: "customerAddress",
      allowNull: true,
      type: DataTypes.STRING(400),
    },
  });
  return Customers;
};
