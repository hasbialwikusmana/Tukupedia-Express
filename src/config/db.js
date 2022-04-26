const { Pool } = require("pg");
const connection = new Pool({
  user: "postgres",
  password: "hasbi123",
  host: "localhost",
  port: 5432,
  database: "web2",
});
connection.connect((err) => {
  if (err) {
    console.log("Database not connected");
  } else {
    console.log("Database Connected");
  }
});

module.exports = connection;
