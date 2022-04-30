const connection = require("../config/db");

const getOrders = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM orders", (err, result) => {
      if (!err) {
        resolve(result.rows);
      } else {
        reject(err);
      }
    });
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

module.exports = {
  getOrders,
  getOrderById,
};
