
const express = require("express");

const router = express.Router();

const bahanbaku = require("./controller/bahanbaku");
// const mail = require("./controller/mail");
const dorayaki = require("./controller/dorayaki");

const request = require("./controller/request");
router.use("/bahanbaku", bahanbaku);
// router.use("/mail", mail);
router.use("/dorayaki", dorayaki);

router.use("/requests",request);


module.exports = router;
