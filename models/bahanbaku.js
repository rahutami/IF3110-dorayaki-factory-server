// CREATE TABLE IF NOT EXISTS bahanbaku (
//   id INT NOT NULL AUTO_INCREMENT,
//   nama_bahanbaku VARCHAR(255) NOT NULL,
// stok INTEGER NOT NULL,
// timestamp DATETIME NOT NULL,
// PRIMARY KEY (id)
//   );

const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const BahanBaku = sequelize.define('BahanBaku', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true

  },
  nama_bahanbaku: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stok: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  // Other model options go here
  timestamps: false,
  tableName: 'bahanbaku'
});

// `sequelize.define` also returns the model
console.log(BahanBaku === sequelize.models.BahanBaku); // true
// console.log(BahanBaku.findAll());
module.exports = BahanBaku;