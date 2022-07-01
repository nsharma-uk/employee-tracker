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
    ("Branch Manager", 90000.00, 1),
    ("Marketing Assistant", 25000.00, 1),
    ("Software Engineer", 60000.00, 2),
    ("Junior Developer", 30000.00, 2),
    ("HR Assistant", 25000.00, 3),
    ("HR Apprentice", 25000.00, 3),
    ("Customer Services Assistant", 25000.00, 4),
    ("Customer Services Apprentice", 15000.00, 4),
    ("Finance Assistant", 25000.00, 5),
    ("Head of Finance", 60000.00, 5);

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Hiroshi", "Tadano", 1, NULL),
    ("Alvin", "Monk", 2, 2),
    ("Emily", "Watson", 3, 2),
    ("Oneaka", "Price", 4, 1),
    ("Thamina", "Khan", 5, 3),
    ("Al", "Smith", 6, 1),
    ("James", "Robson", 7, 2),
    ("Gurpreet", "Kaur", 8, 1),
    ("Anton", "Kolaric", 9, 2),
    ("Jenny", "Klein", 10, NULL);