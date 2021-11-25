const express = require("express");
const router = express.Router();
const moment = require("moment");

const Request = require("../models/Request");
const BahanBaku = require("../models/BahanBaku");
const Resep = require("../models/Resep");
const Dorayaki = require("../models/Dorayaki");
const LogRequest = require("../models/LogRequest");
const { Sequelize } = require("sequelize");
const { sendMail } = require("./mail");

const Op = Sequelize.Op;
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
  const { id, action } = req.params;
  // const { action } = req.body;
  // const { idDorayaki, jumlah} = req.body;

  // cari id request
  const allRequests = await Request.findAll();
  const selectedRequest = await Request.findOne({ where: { id } });
  const actionAvailable = selectedRequest.status == "waiting";

  // TODO kalo udah accepted / declined, gabisa diapa2in
  if (selectedRequest) {
    if (actionAvailable) {
      if (action == "accept") {
        // dari id request, cari id dorayaki
        const id_dorayaki = selectedRequest.id_dorayaki;

        // dari dorayaki, cari bahan baku yg dibutuhkan (lewat resep)
        const listIdBahanBaku = [];
        const requiredBahanBakus = await Resep.findAll({
          where: { id_dorayaki },
        });
        // console.log("list id bahanbaku: ",requiredBahanBakus);
        requiredBahanBakus.forEach((element) => {
          listIdBahanBaku.push(element.dataValues["id_bahanbaku"]);
        });
        // console.log("LISTTT id bahanbaku: ", listIdBahanBaku);

        // cari dari list bahan baku (stoknya)
        const stokBahanBakus = await BahanBaku.findAll({
          where: {
            id: {
              [Op.in]: listIdBahanBaku,
            },
          },
        });

        // updateBahanBaku nya TAPI HARUS DICEK DULU CUKUP APA ENGGA !!!! KALO ENGGA TERPAKSA GABISA ???
        // gausah ada pengecekan deh

        let updateValue = new Array(stokBahanBakus.length);
        for (let i = 0; i < stokBahanBakus.length; i++) {
          stokBahanBakus[i].dataValues["stok"] -=
            selectedRequest.dataValues["jumlah"] *
            requiredBahanBakus[i].dataValues["jumlah"];
          updateValue[i] = {};
          updateValue[i]["id"] = stokBahanBakus[i].dataValues["id"];
          updateValue[i]["stok"] = stokBahanBakus[i].dataValues["stok"];
          BahanBaku.update(updateValue[i], {
            where: { id: listIdBahanBaku[i] },
          });
        }
        // update status jadi accepted
        selectedRequest.update({ status: "accepted" });
        // nambahin ke log request ??? (ga kayanya)
        res.status(200).json({ success: true, allRequests });
      } else if (action == "decline") {
        // TODO kalo decline gimana
        // tinggal update status jadi declined?
        selectedRequest.update({ status: "declined" });
        res.status(200).json({ success: true, allRequests });
      }
    } else {
      res.status(404).json({
        success: false,
        allRequests,
        msg: "Action not available, request has already accepted or declined",
      });
    }
  } else {
    res
      .status(404)
      .json({ success: false, allRequests, msg: "Request not available" });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { idDorayaki, amount } = req.body;
    const dorayaki = await Dorayaki.findOne({ id_dorayaki: idDorayaki });

    Request.create({
      id_dorayaki: idDorayaki,
      jumlah: amount,
    });

    sendMail(dorayaki["nama"], amount);

    res.status(200).json("success");
  } catch (err) {
    res.status(500).json("error");
    throw err;
  }
});

module.exports = router;
