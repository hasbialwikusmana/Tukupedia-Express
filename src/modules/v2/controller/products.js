const createError = require("http-errors");
const productsModels = require("../models/products");
const errorServ = new createError.InternalServerError();
const helper = require("../../../helper/response");
exports.getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const sortBy = req.query.sortBy || "products_name";
    const sort = req.query.sort || "ASC";
    const search = req.query.search || "";

    const offset = (page - 1) * limit;

    const result = await productsModels.getProducts({
      search,
      sortBy,
      sort,
      limit,
      offset,
    });
    const {
      rows: [count],
    } = await productsModels.countProducts();
    const totalData = parseInt(count.total);
    const totalPage = Math.ceil(totalData / limit);
    const pagination = {
      currentPage: page,
      limit,
      totalData,
      totalPage,
    };
    if (result.length > 0) {
      helper.response(res, result, 200, "Success Get Products", pagination);
    } else {
      next(createError(404, "Products not found"));
    }
  } catch (error) {
    next(errorServ);
  }
};

exports.getProductsById = async (req, res, next) => {
  try {
    const result = await productsModels.getProductsById(req.params.products_id);
    if (result.length > 0) {
      helper.response(res, result, 200, "Success Get Products By Id");
    } else {
      helper.response(res, result, 404, "Data Not Found");
    }
  } catch (error) {
    next(errorServ);
  }
};

exports.postProducts = async (req, res, next) => {
  try {
    const setData = {
      products_name: req.body.products_name,
      products_price: req.body.products_price,
      products_stock: req.body.products_stock,
      products_description: req.body.products_description,
      category_id: req.body.category_id,
      //   products_image: req.body.products_image,
      products_created_at: new Date(),
    };
    const result = await productsModels.postProducts(setData);
    helper.response(res, result, 200, "Success Added Products");
  } catch (error) {
    next(errorServ);
  }
};

exports.putProducts = async (req, res, next) => {
  try {
    const setData = {
      products_name: req.body.products_name,
      products_price: req.body.products_price,
      products_stock: req.body.products_stock,
      products_description: req.body.products_description,
      category_id: req.body.category_id,
      //   products_image: req.body.products_image,
      products_updated_at: new Date(),
    };
    const result = await productsModels.putProducts(
      req.params.products_id,
      setData
    );
    helper.response(res, result, 200, "Success Update Products");
  } catch (error) {
    next(errorServ);
  }
};
exports.deleteProducts = async (req, res, next) => {
  try {
    const result = await productsModels.deleteProducts(req.params.products_id);
    helper.response(res, result, 200, "Success Delete Products");
  } catch (error) {
    next(errorServ);
  }
};
