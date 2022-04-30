const router = require("express").Router();

const products = require("./routes/products");
const category = require("./routes/category");
const orders = require("./routes/orders");

router.use("/products", products);
router.use("/category", category);
router.use("/orders", orders);

module.exports = router;
