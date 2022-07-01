require("dotenv").config();

//const mysql = require("mysql2");
//const chalk = require("chalk");
const inquirer = require("inquirer");
const {optionQuestions} = require("./utils/questions");
const { generateUserChoices, generateEmployeeName } = require("./utils/utils");
const initDatabase = require("./utils/db")
//define DB config

const init = async () => {
  try {
    const { executeQuery, closeConnection } = await initDatabase({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("Welcome to the Employee Management System");
   
    let inProgress = true;
   
    while (inProgress) {
      const { option } = await inquirer.prompt(optionQuestions);
;
      if (option === "viewAllEmployees") {
      const optionResults = await executeQuery("SELECT * FROM employee")
      console.table (optionResults);
      }
      if (option === "quit") {
        await closeConnection();
        inProgress = false;
        console.log("THANK YOU");
      }

    }
  } catch (error) {
    console.log(`[ERROR]: Internal error | ${error.message}`);
    process.exit(0);
  }
};
init();
