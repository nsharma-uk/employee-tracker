# Employee Tracker ![MIT license](https://img.shields.io/badge/MIT-License-green)


## Summary 
This command-line interface is an application that allows users to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Table of Contents

- [Project Description](#projectdescription)
- [Demo](#demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [License](#license)
- [Tests](#tests)
- [Author](#author)
- [Contact](#contact )


## Project Description
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

### Additional Information
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```



## Demo

[View demo here](https://drive.google.com/file/d/1XT5Mimzpxqjd-0BeHHm1o6N8ggz5LQ_u/view?usp=sharing)

## Technologies

The following technologies and packages were used in this project:

- Node.js v18.2.0 and NPM v8.9.0
- Node core packages: fs (for reading/writing into files),
- Node external packages:
    - "console.table" 
    - "dotenv" 
    - "express" 
    - "inquirer" 
    - "mysql2"


## Installation

To generate your own HTML team page, perform the following steps:

Clone the repository, using SSH keys:

`git@github.com:nsharma-uk/employee-tracker.git`

Go into the new repository and install the required packages:

```
cd employee-tracker
npm install
```

You can run the Node CLI application with:

`npm start` which will start the app.

## Screenshots

![screenshot of deployed page](./img/teamprofilewebpage.png)

![screenshot of tests passed](./img/testspassed.png)

## License

MIT License

## Author

N Sharma

## Contact

Please contact me on my email: [email](nsharmauk711@gmail.com)

Visit my GitHub profile [here](https://github.com/nsharma-uk)



