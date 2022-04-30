const router = require("express").Router();
const ordersController = require("../controller/orders");

router.get("/", ordersController.getOrders);
router.get("/:orders_id", ordersController.getOrderById);
// router.post("/", ordersController.postOrder);
// router.put("/:order_id", ordersController.putOrder);
// router.delete("/:order_id", ordersController.deleteOrder);

module.exports = router;
