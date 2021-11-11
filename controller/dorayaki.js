const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const { mail } = require("../config");
const { sendMail } = require("./mail");

const dorayakis = [
  { id: 1, name: "Dorayaki Stroberi" },
  { id: 2, name: "Dorayaki Blueberry" },
];

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

module.exports = router;
