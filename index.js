const express = require("express");
const router = require("./routes");

const app = express();

const { PORT } = process.env;
console.log(process.env.PORT);
// app.use("/", router);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
