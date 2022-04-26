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

const postProducts = ({ id, name, description, price, stock }) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO products (id,name,description,price,stock)VALUES($1,$2,$3,$4,$5)",
      [id, name, description, price, stock],
      (err, result) => {
        if (!err) {
          resolve(`Product with id ${id} has been added`);
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};

const putProducts = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE products SET name = $1, price = $2, description = $3, stock = $4 WHERE id = $5",
      [data.name, data.price, data.description, data.stock, data.id],
      (err, result) => {
        if (!err) {
          resolve("Data berhasil diupdate");
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};

const deleteProducts = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM products WHERE id = $1",
      [id],
      (err, result) => {
        if (!err) {
          resolve(`Product with id ${id} has been deleted`);
        } else {
          reject(new Error(err));
        }
      }
    );
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
