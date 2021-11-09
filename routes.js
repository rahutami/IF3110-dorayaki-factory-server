const express = require("express");

const router = express.Router();

const bahanbaku = require("./controller/bahanbaku");

router.use("/bahanbaku", bahanbaku);

module.exports = router;
