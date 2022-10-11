// const mysql = import("mysql2");
import mysql from "mysql2";

// import("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Msdenis1!",
  database: "employees",
});

connection.connect(function (err) {
  if (err) throw err;
});

export default connection;
