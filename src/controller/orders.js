const createError = require("http-errors");
const ordersModels = require("../models/orders");
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
      return helper.response(res, result[0], 200, "Success get orders by id");
    } else {
      return helper.response(
        res,
        result,
        404,
        `Orders By Id ${req.params.orders_id} Not Found`
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

exports.putOrders = async (req, res, next) => {
  try {
    const setData = {
      products_id: req.body.products_id,
      orders_qty: req.body.orders_qty,
      orders_subtotal: req.body.orders_subtotal * req.body.orders_qty,
      orders_updated_at: new Date(),
    };
    const result = await ordersModels.putOrders(req.params.orders_id, setData);
    helper.response(res, result, 200, "Success update orders");
  } catch (error) {
    next(errorServ);
  }
};
exports.deleteOrders = async (req, res, next) => {
  try {
    const result = await ordersModels.deleteOrders(req.params.orders_id);
    if (result.length > 0) {
      helper.response(res, result, 200, "Success delete orders");
    } else {
      helper.response(
        res,
        result,
        404,
        `Delete Orders Id ${req.params.orders_id} Not Found`
      );
    }
  } catch (error) {
    next(errorServ);
  }
};
