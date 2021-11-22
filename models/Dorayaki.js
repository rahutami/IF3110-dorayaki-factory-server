// CREATE TABLE `dorayaki` (
//     `id` int NOT NULL AUTO_INCREMENT,
//     `nama` varchar(255) DEFAULT NULL,
//     PRIMARY KEY (`id`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Resep = require("../models/Resep");

const Dorayaki = sequelize.define(
  "Dorayaki",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: false,
    tableName: "dorayaki",
  }
);

// Dorayaki.belongsTo(Resep, {foreignKey: "id"});
// `sequelize.define` also returns the model
console.log(Dorayaki === sequelize.models.Dorayaki); // true
// console.log(BahanBaku.findAll());
module.exports = Dorayaki;
