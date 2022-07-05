//view departments

//complex query syntax from nazeh abel https://github.com/nazehs

const viewAllDepartments = async (db) => {
  const [departments] = await db.query(
    "SELECT * FROM departments ORDER BY dept_name"
  );
  return departments;
};

//view employees
const viewAllEmployees = async (db) => {
  const [employees] = await db.query(`SELECT 
        e.id,
        CONCAT(e.first_name, ' ', e.last_name) AS employee,
        r.salary,
        r.title,
        d.dept_name,
        CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM
        employees e
            LEFT JOIN
        employees m ON e.manager_id = m.id
            LEFT JOIN
        emp_roles r ON e.role_id = r.id
            LEFT JOIN
        departments d ON r.department_id = d.id;`);
  return employees;
};

const viewAllRoles = async (db) => {
  const [roles] = await db.query(`SELECT 
    emp_roles.id,
    emp_roles.title AS role,
    emp_roles.salary,
    departments.dept_name AS department
FROM
    emp_roles
        INNER JOIN
    departments ON departments.id = emp_roles.department_id;`);
  return roles;
};

const viewAllEmpsByDepartment = async (db) => {
  const [employee] = await db.query(`SELECT 
  e.id,
  CONCAT(e.first_name, ' ', e.last_name) AS employee,
  r.salary,
  r.title,
  d.dept_name,
  CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM
  employees AS e
      LEFT JOIN
  employees AS m ON e.manager_id = m.id
      INNER JOIN
  emp_roles r ON e.role_id = r.id
      LEFT JOIN
  departments d ON r.department_id = d.id;`);
  return employee;
};

module.exports = {
  viewAllDepartments,
  viewAllEmployees,
  viewAllRoles,
  viewAllEmpsByDepartment,
};
