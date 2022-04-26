require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/", require("./src"));

app.get("*", (req, res) => {
  response.status(404).send("Path not Found !");
});
app.listen(process.env.PORT, () =>
  console.log(`Server running at on Port: ${process.env.PORT}!`)
);
