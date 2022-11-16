export default (models) => {
  models.product.belongsToMany(models.customer, {
    foreignKey: "productId",
    // as: "customers",
    through: "customerProducts",
  });

  models.customer.belongsToMany(models.product, {
    foreignKey: "customerId",
    // as: "products",
    through: "customerProducts",
  });

  models.customerProducts.belongsTo(models.product,{
    foreignKey:"",targetKey:"",as:""
  });
  models.customerProducts.belongsTo(models.customer);

  models.customer.hasMany(models.customerProducts);
  models.product.hasMany(models.customerProducts);
};
