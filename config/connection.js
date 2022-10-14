import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "!",
  database: "employees",
});

connection.connect(function (err) {
  if (err) throw err;
});

export default connection;
