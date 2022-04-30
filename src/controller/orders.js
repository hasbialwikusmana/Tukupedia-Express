const createError = require("http-errors");
const ordersModels = require("../models/orders");
// const historyModels = require("../models/history");
// const productsModels = require("../models/products");
const errorServ = new createError.InternalServerError();
const helper = require("../helper/response");

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await ordersModels.getOrders();
    helper.response(res, orders, 200, "Success get all orders");
  } catch (error) {
    next(errorServ);
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const order = await ordersModels.getOrderById(req.params.orders_id);
    helper.response(res, order, 200, "Success get order by id");
  } catch (error) {
    next(errorServ);
  }
};
