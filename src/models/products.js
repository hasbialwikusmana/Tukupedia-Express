const connection = require("../config/db");

const getProducts = ({ sort, limit, offset }) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM products ORDER BY $1 ASC LIMIT $2 OFFSET $3",
      [sort, limit, offset],
      (error, result) => {
        if (!error) {
          resolve(result.rows);
        } else {
          reject(new Error(error));
        }
      }
    );
  });
};

const getProductsByName = (keyword, limit) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM products WHERE products_name LIKE $1 LIMIT $2",
      [`%${keyword}%`, limit],
      (error, result) => {
        if (!error) {
          resolve(result.rows);
        } else {
          reject(new Error(error));
        }
      }
    );
  });
};

const getProductsById = (products_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT products.*, category.category_name FROM products INNER JOIN category ON products.category_id = category.category_id WHERE products_id = $1",
      [products_id],
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
      "INSERT INTO products (products_name,products_price,products_stock,products_description) VALUES ($1,$2,$3,$4)",
      [
        setData.products_name,
        setData.products_price,
        setData.products_stock,
        setData.products_description,
      ],
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

const putProducts = (products_id, setData) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE products SET products_name = $1, products_price = $2, products_stock = $3, products_description = $4 WHERE products_id = $5",
      [
        setData.products_name,
        setData.products_price,
        setData.products_stock,
        setData.products_description,
        products_id,
      ],
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

const deleteProducts = (products_id) => {
  return connection.query("DELETE FROM products WHERE products_id = $1", [
    products_id,
  ]);
};

const countProducts = () => {
  return connection.query("SELECT COUNT(*) AS total FROM products");
};
const countProductsByName = (search) => {
  return connection.query(
    "SELECT COUNT(*) AS total FROM products WHERE products_name LIKE $1",
    [`%${search}%`]
  );
};

module.exports = {
  getProducts,
  getProductsByName,
  getProductsById,
  postProducts,
  putProducts,
  deleteProducts,
  countProducts,
  countProductsByName,
};
