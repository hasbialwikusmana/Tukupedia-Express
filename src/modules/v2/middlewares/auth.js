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
    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];

      let decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log(decoded);
      next();
    } else {
      next(createError(403, "Server need token"));
    }
  } catch (error) {
    console.log(error.name);

    if (error && error.name === "TokenExpiredError") {
      next(createError(403, "Token invalid"));
    } else if (error && error.name === "JsonWebTokenError") {
      next(createError(403, "Token Expired"));
    } else {
      next(createError(403, "Token not active"));
    }
  }
};

module.exports = {
  generateToken,
  protect,
};
