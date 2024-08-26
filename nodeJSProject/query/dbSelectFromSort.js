const mysql = require("mysql");
const con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");

  // const sql = "SELECT * FROM customers ORDER BY name";
  const sql = "SELECT * FROM customers ORDER BY name DESC";
  con.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
  });

  con.end();
});
