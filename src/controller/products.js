const productsModels = require("../models/products");
const helper = require("../helper/response");

exports.getProducts = async (req, res) => {
  try {
    const result = await productsModels.getProducts();
    helper.response(res, 200, "Success Get Data Products", result);
  } catch (error) {
    helper.response(res, 400, "Bad Request", error);
  }
};
exports.getProductsById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await productsModels.getProductsById(id);
    helper.response(res, 200, `Success Get Data Products By Id ${id}`, result);
  } catch (error) {
    helper.response(res, 400, "Bad Request", error);
  }
};
exports.postProducts = async (req, res) => {
  try {
    const setData = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      created_at: req.body.created_at,
      // image: req.body.image,
      // category_id: req.body.category_id,
    };
    const result = await productsModels.postProducts(setData);
    helper.response(res, 200, "Success Post Data Products", result);
  } catch (error) {
    helper.response(res, 400, "Bad Request", error);
  }
};
exports.putProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const setData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      created_at: req.body.created_at,
      // image: req.body.image,
      // category_id: req.body.category_id,
    };
    const result = await productsModels.putProducts(id, setData);
    helper.response(res, 200, `Success Update Data Products ${id}`, result);
  } catch (error) {
    helper.response(res, 400, "Bad Request", error);
  }
};
exports.deleteProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await productsModels.deleteProducts(id);
    helper.response(res, 200, `Success Delete Data Products ${id}`, result);
  } catch (error) {
    helper.response(res, 400, "Bad Request", error);
  }
};
exports.getProductsByName = async (req, res) => {
  try {
    const name = req.params.name;
    const result = await productsModels.getProductsByName(name);
    helper.response(
      res,
      200,
      `Success Get Data Products By Name ${name}`,
      result
    );
  } catch (error) {
    helper.response(res, 400, "Bad Request", error);
  }
};
