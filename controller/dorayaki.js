const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const { mail } = require("../config");
const { sendMail } = require("./mail");

const dorayakis = [
  { id: 1, name: "Dorayaki Stroberi" },
  { id: 2, name: "Dorayaki Blueberry" },
];

const Dorayaki = require("../models/Dorayaki");

router.route("/request").post(async (req, res) => {
  const { id, amount, store } = req.body;

  const dorayaki = dorayakis.filter((dorayaki) => dorayaki.id === id);

  if (dorayaki.length === 0) res.status(404).json("Dorayaki doesn't exist");
  else {
    //   Add to database

    // Send Mail
    const status = sendMail(dorayaki[0]["name"], amount, store);

    if (status) {
      res.status(200).json("Request successfully sent");
    } else {
      res.status(500).json("Unable to send mail to admin");
    }
  }
});

// get all item
router.route("/").get(async (req, res) => {
  const dorayaki = await Dorayaki.findAll();
  res.status(200).json(dorayaki);
});

// create new dorayaki
router.route("/").post(async (req, res) => {
  const { nama, deskripsi } = req.body;

  if (nama) {
    const newItem = { nama, deskripsi }; //id will probably not needed, pake auto increment

    Dorayaki.create(newItem)
      .then((result) => {
        console.log();
        res.status(200).json({ success: true, ...result.dataValues });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false, msg: "Internal server error" });
      });
  } else {
    res
      .status(400)
      .json({ success: false, msg: "Please insert nama" });
  }
});

module.exports = router;
