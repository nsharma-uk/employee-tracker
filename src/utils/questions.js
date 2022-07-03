//starter questions for user

const optionQuestions = {
  type: "list",
  message: "What would you like to do?",
  name: "option",
  choices: [
    {
      value: "viewAllDepartments",
      name: "View all departments",
      short: "All Departments",
    },
    {
      value: "viewAllEmployees",
      name: "View all employees",
      short: "All Employees",
    },
    {
      value: "ViewAllRoles",
      name: "View all roles",
      short: "All Roles",
    },
    {
      value: "viewAllEmpsByDepartment",
      name: "View all employees by department",
      short: "Employees By Department",
    },
    {
      value: "viewAllByManager",
      name: "View all employees by manager",
      short: "Employees By Manager",
    },
    {
      value: "addDepartment",
      name: "Add a department",
      short: "Add department",
    },
    {
      value: "removeDepartment",
      name: "Remove a Department",
      short: "Remove department",
    },
    {
      value: "addEmployee",
      name: "Add an employee",
      short: "Add employee",
    },
    {
      value: "removeEmployee",
      name: "Remove an Employee",
    },
    {
     
      value: "updateRole",
      name: "Update employee role",
      short: "Update employee",
    },
    {
      short: "Update Manager",
      value: "updateManager",
      name: "Update a manager",
     
    },
    {
      value: "addRole",
      name: "Add a role",
      short: "Add role",
    },
    {
      value: "removeRole",
      name: "Remove a role",
      short: "Remove role",
    },
    {
      value: "Exit",
      name: "Exit the App",
      short: "Exit",
    },
  ],
};

module.exports = {optionQuestions};