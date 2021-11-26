const express = require("express");
const authControllers = require("./auth");
const router = express.Router();

router.post("/login", authControllers.login);

router.post("/register", authControllers.register);

router.post("/recipe", (req, res) => {});

router.post("/add-recipe", (req, res) => {});

module.exports = router;
