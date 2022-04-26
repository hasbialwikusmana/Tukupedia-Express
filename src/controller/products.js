const productsModels = require("../models/products");
const helper = require("../helper/response");

exports.getProducts = async (req, res) => {
  try {
    const result = await productsModels.getProducts();
    return helper.response(res, 200, "Success Get All Products", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};

exports.getProductsById = async (req, res) => {
  try {
    const result = await productsModels.getProductsById(req.params.id);
    return helper.response(res, 200, "Success Get Products By Id", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};

exports.getProductsByName = async (req, res) => {
  try {
    const result = await productsModels.getProductsByName(req.params.name);
    return helper.response(res, 200, "Success Get Products By Name", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};

exports.postProducts = async (req, res) => {
  try {
    const result = await productsModels.postProducts(req.body);
    return helper.response(res, 200, "Success Post Products", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};

exports.putProducts = async (req, res) => {
  try {
    const result = await productsModels.putProducts(req.params.id, req.body);
    return helper.response(res, 200, "Success Edit Products", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};

exports.deleteProducts = async (req, res) => {
  try {
    const result = await productsModels.deleteProducts(req.params.id);
    return helper.response(res, 200, "Success Delete Products", result);
  } catch (err) {
    return helper.response(res, 400, "Bad Request", err);
  }
};
