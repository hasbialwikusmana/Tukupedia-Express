const router = require("express").Router();
const productsController = require("../controller/products");
const { protect } = require("../middlewares/auth");
const uploads = require("../middlewares/multer");

router.get("/", protect, productsController.getProducts);
router.get("/:products_id", productsController.getProductsById);
router.post("/", uploads, productsController.postProducts);
router.put("/:products_id", productsController.putProducts);
router.delete("/:products_id", productsController.deleteProducts);

module.exports = router;
