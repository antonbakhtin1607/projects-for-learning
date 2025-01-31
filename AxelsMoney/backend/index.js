import express from "express";
import mysql from "mysql2";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "s3kreee7",
  database: "testdb",
});

connection.connect();

const sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
const values = ["David", "david@example.com", 28];

connection.query(sql, values, (err, results) => {
  if (err) throw err;
  console.log("User inserted with ID:", results.insertId);
});

connection.end();
