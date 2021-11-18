// CREATE TABLE `bahanbaku` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `nama_bahanbaku` varchar(255) NOT NULL,
//   `satuan` varchar(255) NOT NULL,
//   `stok` int NOT NULL,
//   `timestamp` datetime NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const BahanBaku = sequelize.define(
  "BahanBaku",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_bahanbaku: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    satuan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: false,
    tableName: "bahanbaku",
  }
);

// `sequelize.define` also returns the model
console.log(BahanBaku === sequelize.models.BahanBaku); // true
// console.log(BahanBaku.findAll());
module.exports = BahanBaku;
