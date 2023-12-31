const express = require("express");

const router = express.Router();

const bahanbaku = require("./controller/bahanbaku");
const dorayaki = require("./controller/dorayaki");
const request = require("./controller/request");

const resep = require("./controller/resep");

router.use("/bahanbaku", bahanbaku);
// router.use("/mail", mail);
router.use("/dorayaki", dorayaki);
const auth = require("./controller/authRoute");
const requestSupplier = require("./controller/requestsupplier");
const { authenticateToken } = require("./controller/auth");

// router.use("/resep", authenticateToken, resep);
// router.use("/bahanbaku", authenticateToken, bahanbaku);
// router.use("/dorayaki", authenticateToken, dorayaki);
// router.use("/requests", authenticateToken, request);
router.use("/auth", auth);
router.use("/supplier", requestSupplier);

router.use("/resep", resep);
router.use("/bahanbaku", bahanbaku);
router.use("/dorayaki", dorayaki);
router.use("/requests", request);
// router.use("/auth", auth);

module.exports = router;
