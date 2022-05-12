const express = require("express");
require("dotenv").config();

const helmet = require("helmet");
const cors = require("cors");
const createError = require("http-errors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const app = express();
const routerNavigationv1 = require("./src/routerNavigationV1");
const routerNavigationv2 = require("./src/routerNavigationV2");

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use("/v1", routerNavigationv1);
app.use("/v2", routerNavigationv2);

app.all("*", (req, res, next) => {
  next(new createError.NotFound());
});

app.use((err, req, res, next) => {
  const messError = err.message || "Internal Server Error";
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: messError,
  });
});
app.listen(PORT, () => console.log(`Server running at on Port: ${PORT}!`));
