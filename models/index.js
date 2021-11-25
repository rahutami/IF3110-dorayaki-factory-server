const { Sequelize } = require("sequelize");
const { db } = require("../config");

const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
  define: {
    freezeTableName: true,
  },
  timezone: "+07:00", // for writng
});

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

authenticate();

module.exports = sequelize;
