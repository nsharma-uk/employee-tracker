require("dotenv").config();
const mysql = require("mysql2");

//const inquirer = require("inquirer");

//define DB config
const config = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_db",
};

//console.log(process.env);

const db = mysql.createConnection(config);

db.query("SELECT * FROM department", function (error, results) {
  console.log(results); // results contains rows returned by server
});
