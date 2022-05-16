const createError = require("http-errors");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { getUsersByEmail, create } = require("../models/users");
const errorServ = new createError.InternalServerError();
const helper = require("../../../helper/response");
const auth = require("../../../helper/auth");

const register = async (req, res, next) => {
  try {
    const { users_email, users_password, users_name } = req.body;
    const { rowCount } = await getUsersByEmail(users_email);
    // console.log(rowCount);
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(users_password, salt);
    console.log(hashPassword);
    if (rowCount) {
      return next(createError(403, "email already exist"));
    }
    const data = {
      id: uuidv4(),
      users_email,
      users_password: hashPassword,
      users_name,
      users_role: 2,
    };
    await create(data);
    helper.response(res, null, 201, "you are successfully registered");
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};
const login = async (req, res, next) => {
  try {
    const { users_email, users_password, users_role } = req.body;
    const {
      rows: [users],
    } = await getUsersByEmail(users_email);
    // const user = rows[0]
    if (!users) {
      return helper.response(res, null, 403, "email or password is wrong");
    }
    const checkPassword = bcrypt.compareSync(
      users_password,
      users.users_password
    );
    if (!checkPassword) {
      return helper.response(res, null, 403, "email or password is wrong");
    }
    delete users.users_password;

    const payload = {
      users_email: users_email,
      users_role: users_role,
    };
    // generate token
    users.token = auth.generateToken(payload);
    users.refreshToken = auth.generateRefreshToken(payload);

    helper.response(res, users, 201, "successfully login");
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};
const profile = async (req, res, next) => {
  try {
    const users_email = req.decoded.users_email;
    const {
      rows: [users],
    } = await getUsersByEmail(users_email);
    delete users.users_password;
    helper.response(res, users, 200, "Success get profile");
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.body.refreshToken;
    const decoded = jwt.verify(
      refreshToken,
      process.env.SECRET_KEY_REFRESH_TOKEN
    );
    const payload = {
      users_email: decoded.users_email,
      users_role: decoded.users_role,
    };
    const result = {
      token: auth.generateToken(payload),
      refreshToken: auth.generateRefreshToken(payload),
    };
    helper.response(res, result, 200);
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};

module.exports = {
  register,
  login,
  profile,
  refreshToken,
};
