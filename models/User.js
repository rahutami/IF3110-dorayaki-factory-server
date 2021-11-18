// CREATE TABLE `user` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `username` varchar(50) NOT NULL,
//   `password` varchar(255) NOT NULL,
//   `email` varchar(75) NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(75),
    allowNull: false
  },
}, {
  // Other model options go here
  timestamps: false,
  tableName: 'user'
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;