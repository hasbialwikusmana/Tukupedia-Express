const router = require("express").Router();
const productsController = require("../controller/products");
const { protect } = require("../middlewares/auth");
// const uploads = require("../middlewares/multer");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const uploads = multer({ storage: storage });

router.get("/", protect, productsController.getProducts);
router.get("/:products_id", productsController.getProductsById);
router.post(
  "/",
  uploads.single("products_images"),
  productsController.postProducts
);
router.put("/:products_id", productsController.putProducts);
router.delete("/:products_id", productsController.deleteProducts);

module.exports = router;
