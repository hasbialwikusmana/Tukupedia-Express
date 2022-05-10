const router = require("express").Router();
const ordersController = require("../controller/orders");

router.get("/", ordersController.getOrders);
router.get("/:orders_id", ordersController.getOrderById);
router.post("/", ordersController.postOrders);
router.put("/:orders_id", ordersController.putOrders);
router.delete("/:orders_id", ordersController.deleteOrders);

module.exports = router;
