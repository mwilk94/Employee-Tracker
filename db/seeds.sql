use employees;

INSERT INTO department
    (name)
VALUES
    ('Engineering'),
    ('Sales'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Don', 'Lothario', 3, NULL),
    ('Bella', 'Goth', 1, 3),
    ('Judith', 'Ward', 8, Null);
    ('Bob', 'Pancakes', 2, 1),
    ('Summer', 'Holiday', 7, NULL),
    ('Agness', 'Crumplebottom', 4, NULL),
    ('Vladius', 'Straud', 6, 5),
    ('Geoffrey', 'Landgraab', 5, 7),
    