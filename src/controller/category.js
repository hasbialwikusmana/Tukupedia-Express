const categoryModels = require("../models/category");
const helper = require("../helper/response");

exports.getCategory = async (req, res, next) => {
  try {
    const result = await categoryModels.getCategory();
    helper.response(res, 200, "Success Get Data Category", result);
  } catch (error) {
    helper.response(res, 400, "Bad Request", error);
  }
};
exports.getCategoryById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await categoryModels.getCategoryById(id);
    helper.response(res, 200, `Success Get Data Category By Id ${id}`, result);
  } catch (error) {
    helper.response(res, 400, "Bad Request", error);
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
    helper.response(res, 400, "Bad Request", error);
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
    helper.response(res, 400, "Bad Request", error);
  }
};
exports.deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await categoryModels.deleteCategory(id);
    helper.response(res, 200, `Success Delete Data Category ${id}`, result);
  } catch (error) {
    helper.response(res, 400, "Bad Request", error);
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
    helper.response(res, 400, "Bad Request", error);
  }
};
