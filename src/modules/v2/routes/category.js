const router = require("express").Router();
const categoryController = require("../controller/category");
const { protect } = require("../middlewares/auth");

router.get("/", protect, categoryController.getCategory);
router.get("/:category_id", categoryController.getCategoryById);
router.post("/", categoryController.postCategory);
router.put("/:category_id", categoryController.putCategory);
router.delete("/:category_id", categoryController.deleteCategory);

module.exports = router;
