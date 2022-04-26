const router = require("express").Router();
const categoryController = require("../controller/category");

router.get("/", categoryController.getCategory);
router.get("/:id", categoryController.getCategoryById);
router.post("/", categoryController.postCategory);
router.put("/:id", categoryController.putCategory);
router.delete("/:id", categoryController.deleteCategory);
router.get("/name/:name", categoryController.getCategoryByName);

module.exports = router;
