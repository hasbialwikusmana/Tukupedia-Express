const router = require("express").Router();
const productsController = require("../controller/products");

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProductsById);
router.post("/", productsController.postProducts);
router.put("/:id", productsController.putProducts);
router.delete("/:id", productsController.deleteProducts);
router.get("/name/:name", productsController.getProductsByName);

module.exports = router;
