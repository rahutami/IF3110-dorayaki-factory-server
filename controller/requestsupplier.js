const express = require("express");
const router = express.Router();
const Request = require("../models/Request");
const Dorayaki = require("../models/Dorayaki");
const { sendMail } = require("./mail");

router.route("/request").post(async (req, res) => {
  try {
    const { idDorayaki, amount } = req.body;
    const dorayaki = await Dorayaki.findOne({ id_dorayaki: idDorayaki });

    Request.create({
      id_dorayaki: idDorayaki,
      jumlah: amount,
    });

    const mailStatus = await sendMail(dorayaki["nama"], amount);

    if (mailStatus) res.status(200).json("success");
    else res.status(500).json("error");
  } catch (err) {
    res.status(500).json("error");
    console.log(err);
  }
});

module.exports = router;
