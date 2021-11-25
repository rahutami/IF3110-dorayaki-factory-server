const express = require("express");
const moment = require("moment");
const router = express.Router();

const BahanBaku = require("../models/BahanBaku");

// get all item
router.route("/").get(async (req, res) => {
  const bahanBaku = await BahanBaku.findAll();

  res.status(200).json(bahanBaku);
});

// get one item
router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const { Origin } = req.header;

  const selectedBahanBaku = await BahanBaku.findOne({ where: { id } });

  if (selectedBahanBaku)
    res.status(200).json({ success: true, ...selectedBahanBaku.dataValues });
  else
    res.status(404).json({ success: false, msg: "Bahan Baku not available" });
});

// create new item
router.route("/").post(async (req, res) => {
  const { nama_bahanbaku, stok, satuan } = req.body;

  if (nama_bahanbaku && stok) {
    const newItem = { nama_bahanbaku, stok, satuan }; //id will probably not needed, pake auto increment

    BahanBaku.create(newItem)
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
      .json({ succes: false, msg: "Please insert name and amount" });
  }
});

// update item
router.route("/:id").put(async (req, res) => {
  const { id } = req.params;
  const { nama_bahanbaku, stok } = req.body;

  const updateValue = {};
  if (nama_bahanbaku && nama_bahanbaku !== "")
    updateValue["nama_bahanbaku"] = nama_bahanbaku;
  if (stok && stok !== "") updateValue["stok"] = stok;

  BahanBaku.update(updateValue, { where: { id } })
    .then(async (result) => {
      const selectedBahanBaku = await BahanBaku.findOne({ where: { id } });

      if (selectedBahanBaku) {
        res
          .status(200)
          .json({ success: true, ...selectedBahanBaku.dataValues });
      } else {
        res
          .status(404)
          .json({ success: false, msg: "Bahan Baku not available" });
      }
    })
    .catch((err) => {
      res.status(500).json({ succes: false, msg: "Internal Server Error" });
    });
  // pas udah connect database probably just use update?
});

module.exports = router;
