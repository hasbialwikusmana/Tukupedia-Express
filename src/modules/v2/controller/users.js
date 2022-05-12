const createError = require("http-errors");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const usersModels = require("../models/users");
const errorServ = new createError.InternalServerError();
const helper = require("../../../helper/response");

exports.register = async (req, res, next) => {
  try {
    const { users_email, users_password, users_name } = req.body;
    const { rowCount } = await usersModels.getUsersByEmail(users_email);
    // console.log(rowCount);
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(users_password, salt);
    console.log(hashPassword);

    if (rowCount) {
      return next(createError(403, "user sudah terdaftar"));
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
