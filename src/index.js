const router = require("express").Router();

// const products = require("./routes/products");
const category = require("./routes/category");

// router.use("/products", productRouter);
router.use("/category", category);

module.exports = router;
