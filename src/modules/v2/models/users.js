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

const create = async ({
  users_id,
  users_email,
  users_password,
  users_name,
  users_role,
}) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO users (users_id,users_email,users_password,users_name,users_role) VALUES ($1,$2,$3,$4,$5)",
      [users_id, users_email, users_password, users_name, users_role],
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
