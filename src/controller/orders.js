const createError = require("http-errors");
const ordersModels = require("../models/orders");
// const historyModels = require("../models/history");
// const productsModels = require("../models/products");
const errorServ = new createError.InternalServerError();
const helper = require("../helper/response");

exports.getOrders = async (req, res, next) => {
  try {
    const result = await ordersModels.getOrders();
    helper.response(res, result, 200, "Success get all orders");
  } catch (error) {
    next(errorServ);
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const result = await ordersModels.getOrderById(req.params.orders_id);
    if (result.length > 0) {
      return helper.response(res, result, 200, "Success get order by id");
    } else {
      return helper.response(
        res,
        result,
        404,
        `Order By Id ${req.params.orders_id} Not Found`
      );
    }
  } catch (error) {
    next(errorServ);
  }
};
exports.postOrders = async (req, res, next) => {
  try {
    const setData = {
      products_id: req.body.products_id,
      orders_qty: req.body.orders_qty,
      orders_subtotal: req.body.orders_subtotal * req.body.orders_qty,
    };
    const result = await ordersModels.postOrders(setData);
    helper.response(res, result, 200, "Success post orders");
  } catch (error) {
    next(errorServ);
  }
};
