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

  const sql =
    "UPDATE customers SET address = 'Canyon 123' WHERE address = ' Sky st 331'";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " Record(s) updated");
  });

  con.end();
});
