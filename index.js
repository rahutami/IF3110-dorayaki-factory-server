const express = require("express");
const router = require("./routes");
const sequelize = require("./models/index");
const app = express();

const PORT = process.env.PORT || 8000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
