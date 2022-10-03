import Sequelize from "sequelize";

export const MYSQL_DATE = Object.create(Sequelize.DataTypes.DATE);

MYSQL_DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);
  return date.format("YYYY-MM-DD HH:mm:ss.SSS");
};
