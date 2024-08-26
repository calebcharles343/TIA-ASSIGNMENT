const con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

// NOT WORKING

/*
var con = mysql.createConnection({
  host: "localhost:3306",
  user: "root",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

*/
