import Sequelize from 'sequelize';
// const Sequelize = require('sequelize');
// import { MYSQL_DATE } from '../customSequelizeDataTypes';

const options = {
  timestamps: true,
  tableName: 'customers',
  createdAt: 'addDate',
  updatedAt: 'changeDate',
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
  return sequelize.define('customers', definition, options);
};
