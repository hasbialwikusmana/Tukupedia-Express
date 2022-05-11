const router = require("express").Router();

const products = require("./modules/v1/routes/products");
const category = require("./modules/v1/routes/category");
const orders = require("./modules/v1/routes/orders");

router.use("/products", products);
router.use("/category", category);
router.use("/orders", orders);

module.exports = router;
