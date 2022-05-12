const router = require("express").Router();

// version 1 for beginer backend
const products = require("./modules/V1/routes/products");
const category = require("./modules/V1/routes/category");
const orders = require("./modules/V1/routes/orders");

router
  .use("/products", products)
  .use("/category", category)
  .use("/orders", orders);

module.exports = router;
