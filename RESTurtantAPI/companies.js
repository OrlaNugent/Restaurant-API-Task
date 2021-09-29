const sequelize = require("./db");
const { Sequelize, DataTypes, Model } = require("sequelize");

class Company extends Model {}

Company.init(
  {
    name: DataTypes.STRING,
    logoURL: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "companies",
    timestamps: false,
  }
);

module.exports = Company;
