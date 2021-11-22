const express = require("express");
const router = express.Router();

const Request = require("../models/Request");
const BahanBaku = require("../models/BahanBaku");
const Resep = require("../models/Resep");
const Dorayaki = require("../models/Dorayaki");
const { Sequelize } = require("sequelize");

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

router.route("/:action/:id").get(async (req, res) => {
  // note: id disini itu id request kayaknya?
  const { action, id } = req.params;
  // const { idDorayaki, jumlah} = req.body;


  if (action == "accept") {
    // dari id request, cari id dorayaki
    const selectedRequest = await Request.findOne({where: {id}});
    if (selectedRequest) {
      // res.status(200).json({ success: true, ...selectedRequest.dataValues})
      // cari id dorayaki
      const id_dorayaki = selectedRequest.id_dorayaki;
      // const id_dorayaki = (await selectedRequest)._attributes['id_dorayaki'];
      // const id_dorayaki = selectedRequest({attributes: ['id_dorayaki']});
      console.log("ID DORAYAKI: ",id_dorayaki);

      // ini agak gaperlu?
      // const selectedDorayaki = await Dorayaki.findOne({where: {id}});
      // console.log("dorayaki yg ada di requestnya: ",selectedDorayaki);

      // dari dorayaki, cari bahan baku yg dibutuhkan (lewat resep)
      const listIdBahanBaku = [];
      const requiredBahanBakus = await Resep.findAll({where: {id_dorayaki}});
      console.log("list id bahanbaku: ",requiredBahanBakus);
      requiredBahanBakus.forEach(element => {
        listIdBahanBaku.push(element.dataValues['id_bahanbaku']);
      });
      console.log("LISTTT id bahanbaku: ", listIdBahanBaku);


      // kurangin bahan bakunya (pake looping) -> gmn ya cara update beberapa tuple bahanbaku?
      
      // cari dari list bahan baku (stoknya)
      const stokBahanBakus = await BahanBaku.findAll(
      {
        where: {
          id: {
            [Op.in]: listIdBahanBaku
          }
        }
      });

    
      // updateBahanBaku nya TAPI HARUS DICEK DULU CUKUP APA ENGGA !!!! KALO ENGGA TERPAKSA GABISA ???
      // gausah ada pengecekan deh

      let updateValue = new Array(stokBahanBakus.length);
      for (let i = 0; i < stokBahanBakus.length; i++) {
        stokBahanBakus[i].dataValues["stok"] -= selectedRequest.dataValues["jumlah"] * requiredBahanBakus[i].dataValues["jumlah"];
        updateValue[i] = {};
        updateValue[i]["id"] = stokBahanBakus[i].dataValues["id"];
        updateValue[i]["stok"] = stokBahanBakus[i].dataValues["stok"];
        BahanBaku.update(updateValue[i], { where: {id: listIdBahanBaku[i]}});
        //   .then(async (result) => {
        //     res
        //       .status(200)
        //       .json({ success: true, stokBahanBakus});
        // })
        // .catch((err) => {
        //   res.status(500).json({ succes: false, msg: "Internal Server Error" });
        // });
 
      }
      // bingung res nya gitu karena updatenya kyk satu2, gabisa update sekaligus gt bingung,, 
      res.status(200).json({ success: true, stokBahanBakus });
      // const updateValueObj = {};
      // let updateValueObj = {...updateValue};
      // updateValue.forEach(obj => {
      //   updateValueObj[obj["id"]] = obj["id"];
      //   updateValueObj[obj["stok"]] = obj["stok"];

      // })
    //   BahanBaku.update(updateValue, 
    //     {fields: ['stok'],
    //       where: {
    //     id: {
    //       [Op.in]: listIdBahanBaku
    //     },
        
    //   }
    // }
    //   )
    //   .then(async (result) => {
    //       res
    //         .status(200)
    //         .json({ success: true, stokBahanBakus });
    //   })
    //   .catch((err) => {
    //     res.status(500).json({ succes: false, msg: "Internal Server Error" });
    //   });
      console.log("updatevalue:",updateValue);
      // console.log("updatevalue:",updateValueObj);

      console.log("Sesudah:",stokBahanBakus);

 
      // stokBahanBakus.forEach(element => {
      //   element.dataValues["stok"] -= (selectedRequest["jumlah"] * requiredBahanBakus["jumlah"]);
      // });

      // updateValue["stok"] = 
      // BahanBaku.update()
      // res.status(200).json({success: true, selRequest: selectedRequest.dataValues, idDorayaki: id_dorayaki, reqBahanBaku: requiredBahanBakus,stokBahanBaku: stokBahanBakus})
    }
    // else {
    //   res.status(404).json({success: false, msg: "Request not available"})
    // }

  if (action == "decline") {
    // TODO kalo decline gimana

    // tinggal update status jadi declined
  }


    // steps
    
    // dari id_dorayaki, cari bahanbakunya (lewat resep)
 
    // jadi cari resep lewat id dorayaki nanti tau butuh bahan baku apa aja

    // cari bahanbaku

    // kurangin bahan baku

  }




});

module.exports = router;
