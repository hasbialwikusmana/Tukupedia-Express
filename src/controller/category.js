const createError = require("http-errors");
const categoryModels = require("../models/category");
const errorServ = new createError.InternalServerError();
const helper = require("../helper/response");

exports.getCategory = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    const result = await categoryModels.getCategory({ offset, limit });
    // pagination
    const {
      rows: [count],
    } = await categoryModels.countCategory();
    const totalData = parseInt(count.total);
    const totalPage = Math.ceil(totalData / limit);

    res.status(200).json({
      pagination: {
        currentPage: page,
        limit,
        totalData,
        totalPage,
      },
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};
exports.getCategoryById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await categoryModels.getCategoryById(id);
    helper.response(res, 200, `Success Get Data Category By Id ${id}`, result);
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};
exports.postCategory = async (req, res, next) => {
  try {
    const setData = {
      id: req.body.id,
      name_category: req.body.name_category,
    };
    const result = await categoryModels.postCategory(setData);
    helper.response(res, 200, "Success Post Data Category", result);
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};
exports.putCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const setData = {
      name_category: req.body.name_category,
    };
    const result = await categoryModels.putCategory(id, setData);
    helper.response(res, 200, `Success Update Data Category ${id}`, result);
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};
exports.deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await categoryModels.deleteCategory(id);
    helper.response(res, 200, `Success Delete Data Category ${id}`, result);
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};
exports.getCategoryByName = async (req, res, next) => {
  try {
    const name = req.params.name;
    const result = await categoryModels.getCategoryByName(name);
    helper.response(
      res,
      200,
      `Success Get Data Category By Name ${name}`,
      result
    );
  } catch (error) {
    console.log(error);
    next(errorServ);
  }
};
