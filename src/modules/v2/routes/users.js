const router = require("express").Router();
const usersController = require("../controller/users");
const { protect } = require("../middlewares/auth");
const uploads = require("../middlewares/multer");

router
  .post("/register", uploads, usersController.register)
  .post("/login", usersController.login)
  .post("/refresh-token", usersController.refreshToken)
  .get("/profile", protect, usersController.profile);
module.exports = router;
