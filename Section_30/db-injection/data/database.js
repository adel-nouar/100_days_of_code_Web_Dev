const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "security",
  user: "root",
  password: "",
  multipleStatements: false,
});

module.exports = pool;
