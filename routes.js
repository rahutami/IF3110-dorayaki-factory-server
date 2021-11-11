const express = require("express");

const router = express.Router();

const bahanbaku = require("./controller/bahanbaku");
// const mail = require("./controller/mail");
const dorayaki = require("./controller/dorayaki");

router.use("/bahanbaku", bahanbaku);
// router.use("/mail", mail);
router.use("/dorayaki", dorayaki);

module.exports = router;
