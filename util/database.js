const Sequelize = require('sequelize');

const sequelize = new Sequelize("result","nishtha","jinvjung@123B",{
    dialect: "mysql",
    host: "nishthaassignmentserver.mysql.database.azure.com"
});

module.exports = sequelize;
