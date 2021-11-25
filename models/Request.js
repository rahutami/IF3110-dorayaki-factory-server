// CREATE TABLE `request` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `id_dorayaki` int NOT NULL,
//   `jumlah` int NOT NULL,
//   `status` varchar(25) NOT NULL DEFAULT 'waiting',
//   `timestamp` datetime NOT NULL,
//   PRIMARY KEY (`id`),
//   KEY `id_dorayaki` (`id_dorayaki`),
//   CONSTRAINT `request_ibfk_1` FOREIGN KEY (`id_dorayaki`) REFERENCES `dorayaki` (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Request = sequelize.define(
  "Request",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_dorayaki: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: "waiting",
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Other model options go here
    timestamps: false,
    tableName: "request",
  }
);

// `sequelize.define` also returns the model
console.log(Request === sequelize.models.Request); // true

module.exports = Request;
