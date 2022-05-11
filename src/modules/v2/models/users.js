const connection = require("../../../config/db");

const getUsersByEmail = async (users_email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE users_email = $1",
      [users_email],
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const create = async (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO users (users_id, users_email, users_password, users_name) VALUES ($1, $2, $3, $4)",
      [data.users_id, data.users_email, data.users_password, data.users_name],
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

module.exports = {
  getUsersByEmail,
  create,
};
