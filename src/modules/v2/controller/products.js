const createError = require("http-errors");
const fs = require("fs");
const productsModels = require("../models/products");
const errorServ = new createError.InternalServerError();
const helper = require("../../../helper/response");
const client = require("../../../config/redis");
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
    const products_id = req.params.products_id;
    const result = await productsModels.getProductsById(products_id);
    client.setEx(`products/${products_id}`, 60 * 60, JSON.stringify(result));
    helper.response(res, result, 200, "Get data dari database");
  } catch (error) {
    next(errorServ);
  }
};

exports.postProducts = async (req, res, next) => {
  try {
    // console.log(req.file);
    const setData = {
      products_name: req.body.products_name,
      products_price: req.body.products_price,
      products_stock: req.body.products_stock,
      products_description: req.body.products_description,
      category_id: req.body.category_id,
      products_images: `${req.get("host")}/img/${req.file.filename}`,
      products_created_at: new Date(),
    };
    if (setData.products_name === "") {
      return helper.response(res, null, 400, "Please Insert Name Product");
    } else if (setData.products_price === "") {
      return helper.response(res, null, 400, "Please Insert Price Product");
    } else if (setData.products_stock === "") {
      return helper.response(res, null, 400, "Please Insert Stock Product");
    } else if (setData.products_description === "") {
      return helper.response(
        res,
        null,
        400,
        "Please Insert Description Product"
      );
    } else if (setData.category_id === "") {
      return helper.response(res, null, 400, "Please Insert Category Product");
    } else if (setData.products_images === "") {
      return helper.response(res, null, 400, "Please Insert Image Product");
    }
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
      products_images: req.file.filename,
      products_updated_at: new Date(),
    };
    const { products_id } = req.params;
    const checkId = await productsModels.getProductsById(products_id);
    if (checkId.length > 0) {
      const result = await productsModels.putProducts(setData, products_id);
      fs.unlink(`./uploads/${checkId[0].products_images}`, (err) => {
        if (err) throw err;
        console.log("File Deleted");
      });
      helper.response(res, result, 200, "Success Update Products");
    } else {
      return helper.response(res, null, 404, "Data Not Found");
    }
  } catch (error) {
    next(errorServ);
  }
};

exports.deleteProducts = async (req, res, next) => {
  try {
    const { products_id } = req.params;
    const checkId = await productsModels.getProductsById(products_id);
    if (checkId.length > 0) {
      const result = await productsModels.deleteProducts(products_id);
      fs.unlink(`./uploads/${checkId[0].products_images}`, (err) => {
        if (err) throw err;
        console.log("File Deleted");
      });
      helper.response(res, result, 200, "Success Delete Products");
    } else {
      helper.response(res, null, 404, "Data Not Found");
    }
  } catch (error) {
    next(errorServ);
  }
};
