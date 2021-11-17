const express = require("express");
const router = express.Router();

const Request = require("../models/Request");
const BahanBaku = require("../models/BahanBaku");
const Resep = require("../models/Resep");

// get all item
router.route("/").get(async (req, res) => {
  const request = await Request.findAll();
  res.status(200).json(request);
});

// update request
// kalo accept itu jml bahanbaku dikurangin? -> perlu update bahan baku
// kalo decline gakenapa2?

// Pengelolaan Request Penambahan Stok
// Sistem pabrik dapat menerima permintaan penambahan stok dari sistem eksternal
// (toko). Admin pabrik dapat:
// ● Melihat daftar request penambahan stok dorayaki.
// ● Menerima (accept) / menolak (decline) request penambahan stok
// dorayaki.
// Ketika admin menerima (accept) request, stok bahan baku otomatis berkurang,
// namun stok dorayaki di toko tidak langsung bertambah (di luar kepentingan
// pabrik). Pabrik hanya perlu mengupdate status request dan toko akan secara
// berkala memantau status request yang pernah diajukannya.

router.route("/:action/:id").put(async (req, res) => {
  // note: id disini itu id request kayaknya?
  const { action, id } = req.params;
  const { id_dorayaki, jumlah } = req.body;

  const updateValue = {};

  if (action == "accept") {

    // dari id_dorayaki, cari bahanbakunya (lewat resep)
    // jadi cari resep lewat id dorayaki nanti tau butuh bahan baku apa aja
    // tapi BINGUNG dorayaki nya gaada di database gmn ya wkwkwkwk

    // cari bahanbaku
    // BahanBaku.findOne({where: {id}})

  }
  else if (action == "decline") {

  }
  // ah gatauuuu

  
  // BahanBaku.update(updateValue, { where: {id}})
  // .then(async (result) => {
  //   const selectedBahanBaku = await BahanBaku.findOne({where: {id}});
  //   if (selectedBahanBaku) {

  //   }
    
  // })
  // .catch((err) => {
  //   res.status(500).json({success: false, msg: "Internal Server Error"});
  // })

  // Request.update(updateValue, { where: {id}})
  //   .then(async (result) => {
  //     const selectedRequest = await Request.findOne({where: {id}});
  //     if (selectedRequest) {
  //       res.status(200).json({ success: true, ...selectedRequest.dataValues})
  //     }
  //     else {
  //       res.status(404).json({success: true, msg: "Request not available"})
  //     }
  //   })
  // .catch((err) => {
  //   res.status(500).json({success: false, msg: "Internal Server Error"});
  // })
});

module.exports = router;
