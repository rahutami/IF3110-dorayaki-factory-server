// CREATE TABLE IF NOT EXISTS resep (
//     id INT NOT NULL AUTO_INCREMENT,
//     nama_resep VARCHAR(255) NOT NULL,
// id_bahanbaku INTEGER NOT NULL,
// jumlah INTEGER NOT NULL,
// PRIMARY KEY (id)
//     );

const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const BahanBaku = require("../models/BahanBaku");

const Resep = sequelize.define('Resep', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true

  },
  nama_resep: {
    type: DataTypes.STRING,
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

Resep.belongsTo(BahanBaku); // belom yakin beneran ditambahin disini apa engga
// `sequelize.define` also returns the model
console.log(Resep === sequelize.models.Resep); // true
// console.log(Resep.findAll());
module.exports = Resep;