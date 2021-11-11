
// CREATE TABLE IF NOT EXISTS log_request (
//     id INT NOT NULL AUTO_INCREMENT,
// ip int(4) unsigned NOT NULL,
// endpoint VARCHAR(255),
// timestamp DATETIME NOT NULL,
// PRIMARY KEY (id)
//     );


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