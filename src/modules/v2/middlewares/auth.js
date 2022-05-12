const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const generateToken = (payload) => {
  const verifyOption = {
    expiresIn: "1h",
  };
  const token = jwt.sign(
    {
      payload,
    },
    process.env.SECRET_KEY,
    verifyOption
  );
  return token;
};

const protect = (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      let decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.decoded = decoded;
      next();
    } else {
      next(createError(400, "Please login to access this page"));
    }
  } catch (error) {
    console.log(error.name);
    if (error.name === "JsonWebTokenError") {
      next(createError(400, "Token is invalid"));
    } else if (error.name === "TokenExpiredError") {
      next(createError(400, "Token is expired"));
    } else {
      next(createError(400, "Token not active"));
    }
  }
};

const isAdmin = (req, res, next) => {
  if (req.decoded.users_role !== 1) {
    return next(createError(400, "You are not access to this admin page"));
  }
  next();
};

module.exports = {
  generateToken,
  protect,
  isAdmin,
};
