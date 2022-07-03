USE company_db;

SELECT
    *
FROM
    department;

SELECT
    *
FROM
    employee;

SELECT
    *
FROM
    emp_role;

--view ALL employees
SELECT
    e.id,
    CONCAT(e.first_name, ' ', e.last_name) AS employee,
    r.salary,
    r.title,
    d.dept_name,
    CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM
    employee e
    LEFT JOIN employee m ON e.manager_id = m.id
    INNER JOIN emp_role r ON e.role_id = r.id
    LEFT JOIN department d ON r.department_id = d.id;

--view all departments
SELECT
    *
FROM
    department 
    
--view all roles
SELECT
    emp_role.id,
    emp_role.title AS role,
    emp_role.salary,
    department.dept_name AS department
FROM
    emp_role
    LEFT JOIN department ON department.id = emp_role.department_id;

--view employees by department
SELECT
    e.id,
    CONCAT(e.first_name, ' ', e.last_name) AS employee,
    r.salary,
    r.title,
    d.dept_name,
    CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM
    employee AS e
    LEFT JOIN employee AS m ON e.manager_id = m.id
    INNER JOIN emp_role r ON e.role_id = r.id
    LEFT JOIN department d ON r.department_id = d.id;

--view employees by manager
SELECT
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
    LEFT JOIN department d ON r.department_id = d.id --Add employee
INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Nayan", "Sharma", 3, 1);