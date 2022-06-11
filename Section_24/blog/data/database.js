const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    database: "blog",
    user: "root",
    password: "MVH*8p45[2(5imAK~r7G3E=4qgd?Oo",
});

module.exports = pool;
