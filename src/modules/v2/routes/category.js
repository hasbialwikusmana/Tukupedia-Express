const router = require("express").Router();
const categoryController = require("../controller/category");
const { protect, isAdminOrSeller } = require("../middlewares/auth");

router.get("/", categoryController.getCategory);
router.get("/:category_id", categoryController.getCategoryById);
router.post("/", protect, isAdminOrSeller, categoryController.postCategory);
router.put(
  "/:category_id",
  protect,
  isAdminOrSeller,
  categoryController.putCategory
);
router.delete(
  "/:category_id",
  protect,
  isAdminOrSeller,
  categoryController.deleteCategory
);

module.exports = router;
