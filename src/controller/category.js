const createError = require("http-errors");
const categoryModels = require("../models/category");
const errorServ = new createError.InternalServerError();
const helper = require("../helper/response");

exports.getCategory = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const offset = (page - 1) * limit;

    const result = await categoryModels.getCategory({ limit, offset });
    const {
      rows: [count],
    } = await categoryModels.countCategory();
    const totalData = parseInt(count.total);
    const totalPage = Math.ceil(totalData / limit);
    const pagination = {
      currentPage: page,
      limit,
      totalData,
      totalPage,
    };
    helper.response(res, result, 200, "Success Get Category", pagination);
  } catch (error) {
    next(errorServ);
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
    const category = await categoryModels.getCategoryById(
      req.params.category_id
    );
    helper.response(res, category, 200, "Success Get Category By Id");
  } catch (error) {
    next(errorServ);
  }
};

exports.postCategory = async (req, res, next) => {
  try {
    const setData = {
      category_name: req.body.category_name,
      category_created_at: new Date(),
    };
    const result = await categoryModels.postCategory(setData);
    helper.response(res, result, 200, "Success Added Category");
  } catch (error) {
    next(errorServ);
  }
};

exports.putCategory = async (req, res, next) => {
  try {
    const setData = {
      category_name: req.body.category_name,
      category_updated_at: new Date(),
    };
    const result = await categoryModels.putCategory(
      setData,
      req.params.category_id
    );
    helper.response(res, result, 200, "Success Update Category");
  } catch (error) {
    next(errorServ);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const result = await categoryModels.deleteCategory(req.params.category_id);
    helper.response(res, result, 200, "Success Delete Category");
  } catch (error) {
    next(errorServ);
  }
};
