const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const { mail } = require("../config");

const admins = [
  {
    id: 1,
    email: "13519192@std.stei.itb.ac.id",
  },
  {
    id: 2,
    email: "gayuhtami@gmail.com",
  },
];
// send mail
// router.route("/send").post(async
const sendMail = async (name, amount, store) => {
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

  const mailContents = admins.map((admin) => {
    return {
      from: "dorayaki-factory@gmail.com",
      to: admin.email,
      subject: "New Dorayaki Request",
      text: `There's a new request from ${store}. They requested for ${amount} ${name}.`,
    };
  });

  // const mailContent = {
  //   from: "dorayaki-factory@gmail.com",
  //   to: "13519192@std.stei.itb.ac.id",
  //   subject: "Sending Email using Node.js[nodemailer]",
  //   text: "That was easy!",
  // };

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
};

module.exports = { sendMail };
