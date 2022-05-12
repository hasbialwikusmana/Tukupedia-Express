const router = require("express").Router();

// version 2 for intermediate backend
const products = require("./modules/v2/routes/products");
const category = require("./modules/v2/routes/category");
const orders = require("./modules/v2/routes/orders");
const users = require("./modules/v2/routes/users");

router
  .use("/products", products)
  .use("/category", category)
  .use("/orders", orders)
  .use("/users", users);

module.exports = router;
