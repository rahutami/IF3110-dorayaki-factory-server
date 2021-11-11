// CREATE TABLE IF NOT EXISTS user (
//   id INT NOT NULL AUTO_INCREMENT,
//   username VARCHAR(50) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   email VARCHAR(75) NOT NULL,
// PRIMARY KEY (id)
//   );

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
  // Other model options go here
  timestamps: false,
  tableName: 'user'
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;