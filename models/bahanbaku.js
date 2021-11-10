const { DataTypes } = require("sequelize");
const sequelize = require("./index");

// contohh
const BahanBaku = sequelize.define("BahanBaku", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = BahanBaku;
