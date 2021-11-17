const express = require("express");
const router = express.Router();

const Request = require("../models/Request");

// get all item
router.route("/").get(async (req, res) => {
  const request = await Request.findAll();
  res.status(200).json(request);
});

// router.route("/accept/:id").get(async (req,res) => {
//   const { id } = req.params;
//   const { Origin } = req.header;
//   const selectedRequest = await Request.findOne({where: {id}});
//   if (selectedRequest) {
//     res.status(200).json({success: true });
//   }
//   else {
//     res.status(404).json({success: false, msg: "Request not found"})
//   }
// });
module.exports = router;
