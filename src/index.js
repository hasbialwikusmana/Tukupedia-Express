const router = require("express").Router();

const products = require("./routes/products");
const category = require("./routes/category");

router.use("/products", products);
router.use("/category", category);

module.exports = router;
