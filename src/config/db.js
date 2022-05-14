const { Pool } = require("pg");
const connection = new Pool({
  user: process.env.PGUSER,
  password: process.env.PASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});
connection.connect((err) => {
  if (err) {
    console.log("Database not connected");
  } else {
    console.log(`Database connected on ${process.env.PGDATABASE}`);
  }
});

module.exports = connection;
