const router = require("express").Router();
const ordersController = require("../controller/orders");
const { protect, isAdminOrSeller, isCustomer } = require("../middlewares/auth");

router.get("/", ordersController.getOrders);
router.get("/:orders_id", ordersController.getOrderById);
router.post(
  "/",
  protect,
  isCustomer,
  isAdminOrSeller,
  ordersController.postOrders
);
router.put(
  "/:orders_id",
  protect,
  isCustomer,
  isAdminOrSeller,
  ordersController.putOrders
);
router.delete(
  "/:orders_id",
  protect,
  isCustomer,
  isAdminOrSeller,
  ordersController.deleteOrders
);

module.exports = router;
