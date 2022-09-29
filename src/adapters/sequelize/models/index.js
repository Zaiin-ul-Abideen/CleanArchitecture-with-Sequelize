// import Sequelize from 'sequelize';
// import modelsInitializer from "./models";
// import associations from "./models/associations";
// import getSecret from "../secrets/awsSecretsAdapter/get-secrets";
// import * as tedious from "tedious";
// import { DIVISION } from "@utilities/helpers/divisions";
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("testing", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 20,
    min: 0,
    idle: 5000,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer = require("./customer")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Re-synced");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = db;

//   await sequelize.authenticate();
//   console.info('INITIALIZING MODELS');
//   const models = modelsInitializer(sequelize);
//   console.info('CREATING ASSOCIATIONS');
//   const modelAssociations = associations(models);

//   return {
//     sequelize,
//     models,
//     modelAssociations,
//   };
