const sequelize = require("./db");
const Company = require("./companies");
const Menu = require("./menus");
const Location = require("./locations");

async function setupDb() {
  Company.hasMany(Menu);
  Company.hasMany(Location);
  Menu.belongsTo(Company);
  Location.belongsTo(Company);
  await sequelize.sync();
}

module.exports = setupDb;
