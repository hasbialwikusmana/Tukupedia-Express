const connection = require("../config/db");

const getCategory = ({ limit, offset }) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM category LIMIT $1 OFFSET $2",
      [limit, offset],
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
const getCategoryById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM category WHERE id = $1",
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
const getCategoryByName = (name_category) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM category WHERE name_category = $1",
      [name_category],
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
const postCategory = (setData) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO category (id, name_category) VALUES ($1, $2)",
      [setData.id, setData.name_category],
      (err) => {
        if (!err) {
          resolve("Success Post Data Category");
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};
const putCategory = (id, setData) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE category SET name_category = $1 WHERE id = $2",
      [setData.name_category, id],
      (err) => {
        if (!err) {
          resolve("Success Update Data Category");
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};
const deleteCategory = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM category WHERE id = $1", [id], (err) => {
      if (!err) {
        resolve("Success Delete Data Category");
      } else {
        reject(new Error(err));
      }
    });
  });
};
const countCategory = () => {
  return connection.query("SELECT COUNT(*) AS total FROM category");
};
module.exports = {
  getCategory,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategory,
  getCategoryByName,
  countCategory,
};
