const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const protect = (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      let decoded = jwt.verify(token, process.env.SECRET_KEY);
      // let decoded = jwt.verify(token, 'rahasia');
      // console.log(decoded);
      req.decoded = decoded;
      next();
    } else {
      next(createError(400, "please login first"));
    }
  } catch (error) {
    console.log(error.name);
    // console.log(error);
    if (error && error.name === "JsonWebTokenError") {
      next(createError(400, "token invalid"));
    } else if (error && error.name === "TokenExpiredError") {
      next(createError(400, "token expired"));
    } else {
      next(createError(400, "token not active"));
    }
  }
};

const isQuest = (req, res, next) => {
  if (req.decoded.role === 0) {
    next();
  }
};
const isAdmin = (req, res, next) => {
  if (req.decoded.users_role !== 1) {
    return next(createError(400, "you are not admin"));
  }
  next();
};
const isSeller = (req, res, next) => {
  if (req.decoded.users_role !== 2) {
    return next(createError(400, "you are not seller"));
  }
  next();
};
const isCustomer = (req, res, next) => {
  if (req.decoded.users_role !== 3) {
    return next(createError(400, "you are not customer"));
  }
  next();
};
module.exports = {
  protect,
  isQuest,
  isAdmin,
  isSeller,
  isCustomer,
};
