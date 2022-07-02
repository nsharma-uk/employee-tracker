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
      value: "removeDepartment",
      name: "Remove a Department",
      short: "Remove department",
    },
    {
      value: "addEmployee",
      name: "Add Employee",
      short: "Add employee",
    },
    {
      value: "removeEmployee",
      name: "Remove an Employee",
    },
    {
      short: "Employee Role",
      value: "updateRole",
      name: "Update employee role",
      short: "Update employee",
    },
    {
      short: "Employee Manager",
      value: "updateManager",
      name: "Update Employee Manager",
      short: "Add employee",
    },
    {
      value: "addRole",
      name: "Add Role",
      short: "Add role",
    },
    {
      value: "removeRole",
      name: "Remove a Role",
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