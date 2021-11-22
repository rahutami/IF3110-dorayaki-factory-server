// CREATE TABLE `resep` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `id_dorayaki` int NOT NULL,
//   `id_bahanbaku` int NOT NULL,
//   `jumlah` int NOT NULL,
//   PRIMARY KEY (`id`),
//   KEY `id_dorayaki` (`id_dorayaki`),
//   KEY `id_bahanbaku` (`id_bahanbaku`),
//   CONSTRAINT `resep_ibfk_1` FOREIGN KEY (`id_dorayaki`) REFERENCES `dorayaki` (`id`),
//   CONSTRAINT `resep_ibfk_2` FOREIGN KEY (`id_bahanbaku`) REFERENCES `bahanbaku` (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


// 1 resep punya banyak bahan baku

const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const BahanBaku = require("../models/BahanBaku");
const Dorayaki = require("../models/Dorayaki");

const Resep = sequelize.define('Resep', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  id_dorayaki: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_bahanbaku: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  jumlah: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  // Other model options go here
    timestamps: false,
    tableName: 'resep'
});

// Resep.belongsTo(BahanBaku,{foreignKey: "id_bahanbaku"});
Resep.belongsTo(Dorayaki,{foreignKey: "id_dorayaki"});
// Resep.hasMany(BahanBaku);
Resep.hasMany(BahanBaku,{foreignKey:"id"});
// `sequelize.define` also returns the model
console.log(Resep === sequelize.models.Resep); // true
// console.log(Resep.findAll());
module.exports = Resep;