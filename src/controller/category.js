const categoryModels = require("../models/category");
const helper = require("../helper/response");

exports.getCategory = async (req, res) => {
  try {
    const result = await categoryModels.getCategory();
    return helper.response(res, 200, "Success Get All Category", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const result = await categoryModels.getCategoryById(req.params.id);
    return helper.response(res, 200, "Success Get Category By Id", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};

exports.postCategory = async (req, res) => {
  try {
    const result = await categoryModels.postCategory(req.body);
    return helper.response(res, 200, "Success Post Category", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};
exports.putCategory = async (req, res) => {
  try {
    const result = await categoryModels.putCategory(req.params.id, req.body);
    return helper.response(res, 200, "Success Edit Category", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};
exports.deleteCategory = async (req, res) => {
  try {
    const result = await categoryModels.deleteCategory(req.params.id);
    return helper.response(res, 200, "Success Delete Category", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};
exports.getCategoryByName = async (req, res) => {
  try {
    const result = await categoryModels.getCategoryByName(req.params.name);
    return helper.response(res, 200, "Success Get Category By Name", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};
