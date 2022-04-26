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
const postCategory = ({ id, name_category }) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO category (id,name_category)VALUES($1,$2)",
      [id, name_category],
      (err, result) => {
        if (!err) {
          resolve(
            `Category with id ${id} and name ${name_category} has been added`
          );
        } else {
          reject(new Error(err));
        }
      }
    );
  });
};
const putCategory = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE category SET name_category = $1 WHERE id = $2",
      [data.name_category, data.id],
      (err, result) => {
        if (!err) {
          resolve(
            `category with name ${data.name_category} and id ${data.id} has been updated`
          );
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
          resolve(`Category with id ${id} has been deleted`);
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
module.exports = {
  getCategory,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategory,
  getCategoryByName,
};
