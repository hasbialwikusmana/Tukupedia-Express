const connection = require("../config/db");

const getProducts = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM products", (err, result) => {
      if (!err) {
        resolve(result.rows);
      } else {
        reject(new Error(err));
      }
    });
  });
};
const getProductsById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM products WHERE id = $1",
      [id],
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
const getProductsByName = (name) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM products WHERE name = $1",
      [name],
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
const postProducts = (setData) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO products (id, name, description, price, stock, created_at) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        setData.id,
        setData.name,
        setData.description,
        setData.price,
        setData.stock,
        setData.created_at,
      ],
      (err) => {
        if (!err) {
          resolve("Success Post Data Products");
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};
const putProducts = (id, setData) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE products SET name = $1, description = $2, price = $3, stock = $4, created_at = $5 WHERE id = $6",
      [
        setData.name,
        setData.description,
        setData.price,
        setData.stock,
        setData.created_at,
        id,
      ],
      (err) => {
        if (!err) {
          resolve("Success Update Data Products");
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};
const deleteProducts = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM products WHERE id = $1", [id], (err) => {
      if (!err) {
        resolve("Success Delete Data Products");
      } else {
        reject(new Error(err));
      }
    });
  });
};
module.exports = {
  getProducts,
  getProductsById,
  getProductsByName,
  postProducts,
  putProducts,
  deleteProducts,
};
