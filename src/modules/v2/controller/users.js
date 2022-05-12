const createError = require("http-errors");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const usersModels = require("../models/users");
const errorServ = new createError.InternalServerError();
const helper = require("../../../helper/response");
const auth = require("../middlewares/auth");

exports.register = async (req, res, next) => {
  try {
    const { users_email, users_password, users_name } = req.body;
    const { rowCount } = await usersModels.getUsersByEmail(users_email);
    // console.log(rowCount);
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(users_password, salt);
    console.log(hashPassword);

    if (rowCount) {
      return next(createError(403, "users already exists"));
    }
    const setData = {
      users_id: uuidv4(),
      users_email,
      users_password: hashPassword,
      users_name,
    };
    const result = await usersModels.create(setData);
    helper.response(res, result, 201, "success register");
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { users_email, users_password } = req.body;
    const {
      rows: [users],
    } = await usersModels.getUsersByEmail(users_email);
    // console.log(users);
    if (!users) {
      return next(createError(403, "Email or password is wrong"));
    } else {
      const checkPassword = await bcrypt.compare(
        users_password,
        users.users_password
      );
      if (!checkPassword) {
        return next(createError(403, "Email or password is wrong"));
      }
      delete users.users_password;

      const payload = {
        users_email: users.users_email,
        users_role: users.users_role,
      };

      // generate token jwt
      users.token = auth.generateToken(payload);

      helper.response(res, users, 201, "success login");
    }
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};

exports.profile = async (req, res, next) => {
  try {
    const { users_email } = req.payload.users_email;
    const {
      rows: [users],
    } = await usersModels.getUsersByEmail(users_email);
    delete users.users_password;
    helper.response(res, users, 200, "success get profile");
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};
