const connection = require("../config/db");

const getCategory = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM category", (err, result) => {
      if (!err) {
        resolve(result.rows);
      } else {
        reject(new Error(err));
      }
    });
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
      (err, result) => {
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
      (err, result) => {
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
    connection.query(
      "DELETE FROM category WHERE id = $1",
      [id],
      (err, result) => {
        if (!err) {
          resolve("Success Delete Data Category");
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};
module.exports = {
  getCategory,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategory,
  getCategoryByName,
};
