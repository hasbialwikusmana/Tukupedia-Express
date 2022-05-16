const router = require("express").Router();
const {
  register,
  login,
  refreshToken,
  profile,
} = require("../controller/users");
const { protect } = require("../middlewares/auth");
const uploads = require("../middlewares/multer");

router
  .post("/register", uploads, register)
  .post("/login", login)
  .post("/refresh-token", refreshToken)
  .get("/profile", protect, profile);
module.exports = router;
