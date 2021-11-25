const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const { mail } = require("../config");
const User = require("../models/User");

// send mail
// router.route("/send").post(async
const sendMail = async (name, amount) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: mail.username,
      pass: mail.password,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  try {
    const admins = await User.findAll();
    const mailContents = admins.map((admin) => {
      return {
        from: "dorayaki-factory@gmail.com",
        to: admin.email,
        subject: "New Dorayaki Request",
        text: `There's a new request from Dorayaki Store. They requested for ${amount} ${name} variant.`,
      };
    });

    mailContents.forEach(async (mailContent) => {
      await transporter.sendMail(mailContent, function (error, info) {
        if (error) {
          console.log(error);
          return false;
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    });

    return true;
  } catch (err) {
    return false;
  }
};

module.exports = { sendMail };
