const router = require("express").Router();

const productsv1 = require("./modules/v1/routes/products");
const categoryv1 = require("./modules/v1/routes/category");
const ordersv1 = require("./modules/v1/routes/orders");

const productsv2 = require("./modules/v2/routes/products");
const categoryv2 = require("./modules/v2/routes/category");
const ordersv2 = require("./modules/v2/routes/orders");

router
  .use("/products", productsv1)
  .use("/category", categoryv1)
  .use("/orders", ordersv1);

router
  .use("/products", productsv2)
  .use("/category", categoryv2)
  .use("/orders", ordersv2);

module.exports = router;
