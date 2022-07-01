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

SELECT
    emp_role.title,
    department.dept_name,
    emp_role.salary
FROM
    emp_role
    JOIN department ON emp_role.department_id = department.id
ORDER BY
    department.dept_name;

SELECT
    CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS USER,
    R.SALARY,
    R.TITLE,
    D.ID,
    CONCAT(M.FIRST_NAME, ' ', M.LAST_NAME) AS MANAGER
FROM
    EMPLOYEE AS E
    JOIN EMPLOYEE AS M ON E.MANAGER_ID = M.ID
    INNER JOIN EMP_ROLE R ON E.ROLE_ID = R.ID
    LEFT JOIN DEPARTMENT D ON R.DEPARTMENT_ID = D.ID;

 INSERT INTO employee (firstName, lastName, role_id, manager_id) VALUES("${firstName}", "${lastName}", ${role_id}, ${manager_id})
 INSERT INTO emp_role (title, salary, department_id) VALUES("${title}", ${salary}, ${department_id}) 
 UPDATE employee SET role_id = ${role_id} WHERE id = ${id}  