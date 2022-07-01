require("dotenv").config();
const mysql = require("mysql2");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const {generateUserChoices, generateEmployeeName} =require("./utils/utils")

//define DB config
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const db = mysql.createConnection(config);

// db.query("SELECT * FROM employee", function (error, results) {
//   console.log(results); // results contains rows returned by server
// });

const init = async () => {
  await db.init();

  let inProgress = true;
};

init();
