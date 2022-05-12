const router = require("express").Router();

// version 2 for intermediate backend
const products = require("./modules/V2/routes/products");
const category = require("./modules/V2/routes/category");
const orders = require("./modules/V2/routes/orders");
const users = require("./modules/V2/routes/users");

router
  .use("/products", products)
  .use("/category", category)
  .use("/orders", orders)
  .use("/users", users);

module.exports = router;
