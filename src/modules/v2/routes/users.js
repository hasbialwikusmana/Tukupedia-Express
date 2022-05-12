const router = require("express").Router();
const usersController = require("../controller/users");

router
  .post("/register", usersController.register)
  .post("/login", usersController.login)
  .get("/profile", usersController.profile);

module.exports = router;
