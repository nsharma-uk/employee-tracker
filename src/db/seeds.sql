USE company_db;

INSERT INTO
    department (dept_name)
VALUES
    ("Marketing"),
    ("Information Technology"),
    ("Human Resources"),
    ("Customer Services"),
    ("Finance");

INSERT INTO
    emp_role (title, salary, department_id)
VALUES
    ("Marketing Manager", 60000.00, 1),
    ("Marketing Assistant", 25000.00, 1),
    ("Software Engineer", 60000.00, 2),
    ("Junior Developer", 30000.00, 2),
    ("HR Assistant", 25000.00, 3),
    ("HR Manager", 25000.00, 3),
    ("Customer Services Assistant", 25000.00, 4),
    ("Customer Services Manager", 60000.00, 4),
    ("Finance Assistant", 25000.00, 5),
    ("Finance Manager", 60000.00, 5);

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Hiroshi", "Tadano", 1, 1),
    ("Alvin", "Monk", 2, NULL),
    ("Emily", "Watson", 3, 2),
    ("Oneaka", "Price", 4, NULL),
    ("Thamina", "Khan", 5, 3),
    ("Al", "Smith", 6, NULL),
    ("James", "Robson", 7, 2),
    ("Gurpreet", "Kaur", 8, NULL),
    ("Anton", "Kolaric", 9, 2),
    ("Jenny", "Klein", 10, NULL);