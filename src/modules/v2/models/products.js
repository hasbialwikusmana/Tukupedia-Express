const connection = require("../../../config/db");

const getProducts = ({ search, sortBy, sort, limit, offset }) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT products.*,  category.category_id, category.category_name, products.products_created_at, products.products_updated_at FROM products INNER JOIN category ON products.category_id = category.category_id WHERE products.products_name ILIKE $1 ORDER BY ${sortBy} ${sort} LIMIT $2 OFFSET $3`,
      [`%${search}%`, limit, offset],
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
      "INSERT INTO products (products_name,products_price,products_images,products_stock,products_description,category_id) VALUES ($1,$2,$3,$4,$5,$6)",
      [
        setData.products_name,
        setData.products_price,
        setData.products_images,
        setData.products_stock,
        setData.products_description,
        setData.category_id,
      ],
      (err) => {
        if (!err) {
          resolve("Data Succes Added");
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
      "UPDATE products SET products_name = $1, products_price = $2, products_images = $3, products_stock = $4, products_description = $5,category_id = $6, products_updated_at = $7  WHERE products_id = $8",
      [
        setData.products_name,
        setData.products_price,
        setData.products_images,
        setData.products_stock,
        setData.products_description,
        setData.category_id,
        setData.products_updated_at,
        products_id,
      ],
      (err) => {
        if (!err) {
          resolve("Data Success Updated");
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};

const deleteProducts = (products_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM products WHERE products_id = $1",
      [products_id],
      (err) => {
        if (!err) {
          resolve("Data Success Deleted");
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};

const countProducts = () => {
  return connection.query("SELECT COUNT(*) AS total FROM products");
};

module.exports = {
  getProducts,
  getProductsById,
  postProducts,
  putProducts,
  deleteProducts,
  countProducts,
};
