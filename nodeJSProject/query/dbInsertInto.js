const mysql = require("mysql");
const con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");

  const sql = "INSERT INTO customers (name, address) VALUES ?";

  const values = [
    ["John", "Highway 71"],
    ["Peter", "Lowstreet 4"],
    ["Amy", "Apple st 652"],
    ["Hannah", "Mountain 21"],
    ["Michael", "Valley 345"],
    ["Sandy", "Ocean bivd"],
    ["Betty", "Green Grass 1"],
    ["Richard", " Sky st 331"],
    ["Susan", "One way 98"],
    ["Vicky", "Yello Garden 2"],
    ["Ben", "Part Lane 38"],
    ["William", "Central st 989"],
    ["Chuck", "Main Road 989"],
    ["Viola", "Sideway 1633"],
  ];

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  con.end();
});
