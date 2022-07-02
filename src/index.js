require("dotenv").config();

//const mysql = require("mysql2");
//const chalk = require("chalk");
const inquirer = require("inquirer");
const { optionQuestions } = require("./utils/questions");
const { generateUserChoices, generateEmployeeName } = require("./utils/utils");
const initDatabase = require("./utils/db");
const ctable = require("console.table");
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
      if (option === "viewAllDepartments") {
        const optionResults = await executeQuery("SELECT * FROM department");
        console.table(optionResults);
      }
      if (option === "viewAllEmployees") {
        const optionResults = await executeQuery(`SELECT 
        e.id,
        CONCAT(e.first_name, ' ', e.last_name) AS employee,
        r.salary,
        r.title,
        d.dept_name,
        CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM
        employee e
            LEFT JOIN
        employee m ON e.manager_id = m.id
            LEFT JOIN
        emp_role r ON e.role_id = r.id
            LEFT JOIN
        department d ON r.department_id = d.id;`);
        console.table(optionResults);
      }
      if (option === "ViewAllRoles") {
        const optionResults = await executeQuery(`SELECT 
        emp_role.id,
        emp_role.title AS role,
        emp_role.salary,
        department.dept_name AS department
    FROM
        emp_role
            INNER JOIN
        department ON department.id = emp_role.department_id;`);
        console.table(optionResults);
      }
      if (option === "viewAllEmpsByDepartment") {
        const optionResults = await executeQuery(`SELECT 
            e.id,
            CONCAT(e.first_name, ' ', e.last_name) AS employee,
            r.salary,
            r.title,
            d.dept_name,
            CONCAT(m.first_name, ' ', m.last_name) AS manager
        FROM
            employee AS e
                LEFT JOIN
            employee AS m ON e.manager_id = m.id
                INNER JOIN
            emp_role r ON e.role_id = r.id
                LEFT JOIN
            department d ON r.department_id = d.id;`)
        console.table (optionResults);
        }
        if (option === "viewAllByManager") {
          const optionResults = await executeQuery(`SELECT
          e.id,
          CONCAT(e.first_name, ' ', e.last_name) AS employee,
          r.salary,
          r.title,
          d.dept_name,
          CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM
          employee AS e
          LEFT JOIN employee AS m ON e.manager_id = m.id
          LEFT JOIN emp_role r ON e.role_id = r.id
          LEFT JOIN department d ON r.department_id = d.id`)
          console.table (optionResults);
          }
      if (option === "Exit") {
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
