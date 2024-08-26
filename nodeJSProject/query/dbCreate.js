const mysql = require("mysql");
const con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");

  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created!");
  });
});
