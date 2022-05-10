const connection = require("../config/db");

const getOrders = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT orders.orders_id, orders_qty,orders_subtotal, products.products_id,products.products_name,products.products_price FROM orders INNER JOIN products ON orders.products_id = products.products_id",
      (err, result) => {
        if (!err) {
          resolve(result.rows);
        } else {
          reject(err);
        }
      }
    );
  });
};
const getOrderById = (orders_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM orders WHERE orders_id = $1",
      [orders_id],
      (err, result) => {
        if (!err) {
          resolve(result.rows);
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};

const postOrders = (setData) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO orders (products_id,orders_qty,orders_subtotal) VALUES ($1,$2,$3)",
      [setData.products_id, setData.orders_qty, setData.orders_subtotal],
      (err, result) => {
        if (!err) {
          resolve(result.rows);
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};

module.exports = {
  getOrders,
  getOrderById,
  postOrders,
};
