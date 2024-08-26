var request = require("request");
const express = require("express");
const path = require("path");
// const cors = require("cors");

const app = express();
// app.use(cors());

//MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));

//REQUEST
app.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "main.html"));
  //
});

app.get("getExternalRequest", async (req, res) => {
  request("https://www.apachefriends.org/", function (error, response, body) {
    console.log("error:", error); // Print the error if one occurred and handle it
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was recieved
    res.send(body);
  });
});

app.get("/main", async (req, res) => {
  res.send("main.html");
});
app.get("/page1", async (req, res) => {
  res.send("page1.html");
});
app.get("/page2", async (req, res) => {
  res.send("page2.html");
});

app.listen(8080, () => {
  console.log("Server successully running on port 8080");
});
