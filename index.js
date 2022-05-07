require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const createError = require("http-errors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use("/", require("./src"));

app.all("*", (req, res, next) => {
  next(new createError.NotFound());
});

app.use((err, req, res) => {
  const messError = err.message || "Internal Server Error";
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: messError,
  });
});
app.listen(PORT, () => console.log(`Server running at on Port: ${PORT}!`));
