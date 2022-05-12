const router = require("express").Router();
const productsController = require("../controller/products");
const { protect } = require("../middlewares/auth");

router.get("/", protect, productsController.getProducts);
router.get("/search", productsController.getProductsByName);
router.get("/:products_id", productsController.getProductsById);
router.post("/", productsController.postProducts);
router.put("/:products_id", productsController.putProducts);
router.delete("/:products_id", productsController.deleteProducts);

module.exports = router;
