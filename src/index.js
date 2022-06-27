require("dotenv").config();
const mysql = require("mysql2");

//const inquirer = require("inquirer");

//define DB config
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

//console.log(process.env);

const db = mysql.createConnection(config);

db.query("SELECT * FROM department", function (error, results) {
  console.log(results); // results contains rows returned by server
});
