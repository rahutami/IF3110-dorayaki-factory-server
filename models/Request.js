// CREATE TABLE IF NOT EXISTS request (
//     id INT NOT NULL AUTO_INCREMENT,
//     id_dorayaki INTEGER NOT NULL,
// jumlah INTEGER NOT NULL,
// PRIMARY KEY (id)

//     );

const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Request = sequelize.define('Request', {
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
  jumlah: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  // Other model options go here
  timestamps: false,
  tableName: 'request'
});

// `sequelize.define` also returns the model
console.log(Request === sequelize.models.Request); // true

module.exports = Request;