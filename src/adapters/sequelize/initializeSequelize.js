import Sequelize from "sequelize";

import modelsInitializer from "./models";
import associations from "./models/associations";

export default async function initializeSequelize() {
  const sequelize = new Sequelize("testing1", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 20,
      min: 0,
      idle: 5000,
    },
  });

  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Re-synced");
    })
    .catch((error) => {
      console.log("Error in syncing");
      console.log(error);
    });

  console.log("INITIALIZING MODELS");
  const models = modelsInitializer(sequelize);
  console.log("CREATING ASSOCIATIONS");
  const modelCustomer = associations(models);

  return {
    sequelize,
    models,
    modelCustomer,
  };
}
