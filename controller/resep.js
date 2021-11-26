const express = require("express");
const moment = require("moment");
const Resep = require("../models/Resep");
const Dorayaki = require("../models/Dorayaki");
const BahanBaku = require("../models/BahanBaku");

const router = express.Router();
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;


// Admin pabrik:
// ● Dapat membuat resep varian dorayaki baru
// ● Dapat melihat daftar seluruh resep dan isinya (boleh diletakkan di 1
// halaman yang sama maupun dipisah url berbeda)
// ● TIDAK DAPAT menghapus resep, karena akan menimbulkan konflik ketika
// toko sedang melakukan request dorayaki tersebut.
// ● TIDAK DAPAT mengubah isi resep dengan alasan yang sama.

// get all item
// sebenernya resep sama aja kaya dorayaki
// ini untuk get all resep secara overview aja (ga detail)
router.route("/").get(async (req, res) => {
    const resepAll = await Resep.findAll();
    // cari dorayaki yang udah ada resepnya
    const listIdResep = [];
    const existingResep = await Resep.findAll();
    existingResep.forEach((element) => {
        if (!listIdResep.includes(element.dataValues["id_dorayaki"])) {
            listIdResep.push(element.dataValues["id_dorayaki"]);
        }
    });
    // cari dari list dorayaki untuk dapet detail nama dorayakinya
    const dorayakiHasResep = await Dorayaki.findAll({
        where: {
            id: {
            [Op.in]: listIdResep,
            },
        },
        });
  res.status(200).json(dorayakiHasResep);
});

// get one item
// cari resep untuk suatu dorayaki
router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  // cari nama dorayaki
  const selectedDorayaki = await Dorayaki.findOne({where: {id}});
  // cari resep suatu dorayaki
  const selectedResep = await Resep.findAll({ where: {
      id_dorayaki: id
    } });

    // dari dorayaki, cari bahan baku yang dibutuhkan (lewat resep)
    const listIdBahanBaku = [];
    const requiredBahanBakus = await Resep.findAll({
        where: { id_dorayaki: id},
    });
    requiredBahanBakus.forEach((element) => {
        listIdBahanBaku.push(element.dataValues["id_bahanbaku"]);
    });

    // cari dari list bahan baku (stoknya)
    const stokBahanBakus = await BahanBaku.findAll({
        where: {
          id: {
            [Op.in]: listIdBahanBaku,
          },
        },
      });

      let detailResep = new Array(stokBahanBakus.length);
      for (let i = 0; i < stokBahanBakus.length; i++) {
            detailResep[i] = {
                "id_bahanbaku": stokBahanBakus[i].dataValues["id"],
                "nama_bahanbaku": stokBahanBakus[i].dataValues["nama_bahanbaku"],
                "jumlah":selectedResep[i].dataValues["jumlah"],
                "satuan":stokBahanBakus[i].dataValues["satuan"]
            }
      }

  if (selectedDorayaki)
    res.status(200).json({ success: true, idDorayaki: selectedDorayaki.id, namaDorayaki: selectedDorayaki.nama, detailResep: detailResep});
  else
    res.status(404).json({ success: false, msg: "Resep not available" });
});

// create new item
router.route("/").post(async (req, res) => {
    const { id_dorayaki, id_bahanbaku, jumlah } = req.body;
  
    if (id_dorayaki && id_bahanbaku && jumlah) {
      const newItem = { id_dorayaki, id_bahanbaku, jumlah }; //id will probably not needed, pake auto increment
  
      Resep.create(newItem)
        .then((result) => {
          console.log();
          res.status(200).json({ success: true, ...result.dataValues });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ succes: false, msg: "Internal server error" });
        });
    } else {
      res
        .status(400)
        .json({ succes: false, msg: "Please insert id_dorayaki, id_bahanbaku, and jumlah" });
    }
  });

module.exports = router;
