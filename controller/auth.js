const e = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config");
const User = require("../models/User");

const jwtsecret = config.jwt.secret;

exports.authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, jwtsecret, (err, user) => {
      if (err) return res.status(403).json({ msg: "token invalid" });
      req.user = user;
    });
    next();
  } else {
    return res.status(401).json({ msg: "please insert token" });
  }
};

exports.register = async (req, res) => {
  console.log(req.body);
  const { username, password, email } = req.body;

  try {
    const userCount = await User.count({ where: { email: email } });

    if (userCount === 0) {
      let hashedpassword = await bcrypt.hash(password, 8);
      const insertUser = await User.create({
        username,
        password: hashedpassword,
        email,
      });

      if (insertUser) {
        const token = jwt.sign({ username }, jwtsecret);

        return res
          .status(200)
          .json({ success: true, token, msg: "new user created" });
      }
      return res
        .status(500)
        .json({ success: false, msg: "something went wrong" });
    }
    return res.status(400).json({ success: false, msg: "user already exist" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (user) {
      let isMatch = await bcrypt.compare(password, user["password"]);

      if (isMatch) {
        const token = jwt.sign({ username }, jwtsecret);
        return res.status(200).json({
          success: true,
          token,
          msg: "succesfully login",
        });
      }
      return res.status(400).json({ success: false, msg: "wrong password" });
    }
    return res.status(404).json({ success: false, msg: "user not found" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};
