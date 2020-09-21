const Sequelize = require('sequelize');

sequelize = new Sequelize("teamanager", "root", "root", {
  host: "localhost",
  port: 8889,
  dialect: 'mysql',
  pool: {
    max: 80,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const models = {
    Team: require("./team")(sequelize),
};

exports.sequelize = sequelize;
exports.models = models;
