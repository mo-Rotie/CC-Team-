const mysql = require("mysql2/promise");

process.env.DB_USER = "root";
process.env.DB_PASS = "12juni2024";
process.env.DB_NAME = "mold_database";

const connectDB = async () => {
  const connection = await mysql.createConnection({
    socketPath: `/cloudsql/mo-rotie:asia-southeast2:api-article-capstone`,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  console.log("connected to MySQL");
  return connection;
};

module.exports = connectDB;
