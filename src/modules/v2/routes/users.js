const router = require("express").Router();
const usersController = require("../controller/users");

router
  .post("/register", usersController.register)
  .post("/login", usersController.login);

module.exports = router;
