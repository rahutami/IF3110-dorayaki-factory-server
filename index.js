const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes");
const sequelize = require("./models/index");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", ["GET", "PUT", "POST"]);
  res.append("Access-Control-Allow-Headers", [
    "Content-Type",
    "Authorization",
    "Accept",
  ]);
  next();
});

const PORT = process.env.PORT || 8000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
