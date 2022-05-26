const router = require("express").Router();
const productsController = require("../controller/products");
const { protect, isAdminOrSeller } = require("../middlewares/auth");
const uploads = require("../middlewares/multer");
const { hitCacheProductsDetail } = require("../middlewares/redis");

router.get("/", productsController.getProducts);
router.get(
  "/:products_id",
  hitCacheProductsDetail,
  productsController.getProductsById
);
router.post(
  "/",
  protect,
  isAdminOrSeller,
  uploads,
  productsController.postProducts
);
router.put(
  "/:products_id",
  protect,
  isAdminOrSeller,
  productsController.putProducts
);
router.delete(
  "/:products_id",
  protect,
  isAdminOrSeller,
  productsController.deleteProducts
);

module.exports = router;
