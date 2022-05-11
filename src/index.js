const router = require("express").Router();

// version 1 for beginer backend
const productsv1 = require("./modules/v1/routes/products");
const categoryv1 = require("./modules/v1/routes/category");
const ordersv1 = require("./modules/v1/routes/orders");

// version 2 for intermediate backend
const productsv2 = require("./modules/v2/routes/products");
const categoryv2 = require("./modules/v2/routes/category");
const ordersv2 = require("./modules/v2/routes/orders");
const usersv2 = require("./modules/v2/routes/users");

router
  .use("/products", productsv1)
  .use("/category", categoryv1)
  .use("/orders", ordersv1);

router
  .use("/products", productsv2)
  .use("/category", categoryv2)
  .use("/orders", ordersv2)
  .use("/users", usersv2);

module.exports = router;
