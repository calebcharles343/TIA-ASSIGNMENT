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

  con.query("show databases", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
