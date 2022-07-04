//view departments

const viewAllDepartments = async (db) => {
  const [departments] = await db.query(
    "SELECT * FROM departments ORDER BY department_name"
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
        employee e
            LEFT JOIN
        employee m ON e.manager_id = m.id
            LEFT JOIN
        emp_role r ON e.role_id = r.id
            LEFT JOIN
        department d ON r.department_id = d.id;`);
  return employees;
};

const viewAllRoles = async (db) => {
  const [roles] = await db.query(`SELECT 
    emp_role.id,
    emp_role.title AS role,
    emp_role.salary,
    department.dept_name AS department
FROM
    emp_role
        INNER JOIN
    department ON department.id = emp_role.department_id;`);
};

module.exports = { viewAllDepartments, viewAllEmployees, viewAllRoles };
