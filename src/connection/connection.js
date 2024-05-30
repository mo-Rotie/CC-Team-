const mysql = require("mysql2/promise");

const connectDB = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mold_database",
  });
  console.log("connected to MySQL");
  return connection;
};

module.exports = connectDB;
