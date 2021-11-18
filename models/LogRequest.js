// CREATE TABLE `log_request` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `ip` int unsigned NOT NULL,
//   `endpoint` varchar(255) DEFAULT NULL,
//   `timestamp` datetime NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const LogRequest = sequelize.define('LogRequest', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true

  },
  ip: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
  },
  endpoint: {
      type: DataTypes.STRING,
      allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
    // Other model options go here
    timestamps: false,
    tableName: 'log_request'
});

// `sequelize.define` also returns the model
console.log(LogRequest === sequelize.models.LogRequest); // true

module.exports = LogRequest;