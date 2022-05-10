const connection = require("../config/db");

const getCategory = ({ sortBy, sort, limit, offset }) => {
  return new Promise((resolve, reject) => {
    connection.query(
      ` SELECT * FROM category ORDER BY ${sortBy} ${sort} LIMIT $1 OFFSET $2`,
      [limit, offset],
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
const getCategoryById = (category_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM category WHERE category_id = $1",
      [category_id],
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
      "INSERT INTO category (category_name) VALUES ($1)",
      [setData.category_name],
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

const putCategory = (setData, category_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE category SET category_name = $1, category_updated_at = $2 WHERE category_id = $3",
      [setData.category_name, setData.category_updated_at, category_id],
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

const deleteCategory = (category_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM category WHERE category_id = $1",
      [category_id],
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
const countCategory = () => {
  return connection.query("SELECT COUNT(*) AS total FROM category");
};

module.exports = {
  getCategory,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategory,
  countCategory,
};
//
