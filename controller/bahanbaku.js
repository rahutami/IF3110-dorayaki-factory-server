const express = require("express");
const { v4: uuidv4 } = require("uuid"); //probably wont be needed, nanti pake auto increment aja

const router = express.Router();

const bahanBaku = [
  { id: 1, name: "telur", amount: 5 },
  { id: 2, name: "terigu", amount: 10 },
  { id: 3, name: "gula", amount: 10 },
];

// get all item
router.route("/").get(async (req, res) => {
  res.status(200).json(bahanBaku);
});

// get one item
router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const selectedBahanBaku = bahanBaku.filter((item) => item.id == id);

  if (selectedBahanBaku.length === 0)
    res.status(404).json("Bahan Baku not available");
  else res.status(200).json(selectedBahanBaku[0]);
});

// create new item
router.route("/").post(async (req, res) => {
  const { name, amount } = req.body;

  if (name && amount) {
    const newItem = { id: uuidv4(), name, amount }; //id will probably not needed, pake auto increment
    bahanBaku.push(newItem);
    res.status(200).json({ success: true, ...newItem });
  } else {
    res.status(400).json("body galengkap");
  }
});

// update item
router.route("/:id").put(async (req, res) => {
  const { id } = req.params;
  const { name, amount } = req.body;

  // pas udah connect database probably just use update?
});

module.exports = router;
