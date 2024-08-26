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

  const sql = "DELETE FROM customers WHERE address = 'Part Lane 38'";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });

  con.end();
});
