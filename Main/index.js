const inquirer = require("inquirer");
const db = require("./config/connections.js");
const cTable = require("console.table");

const promptUser = () => {
  inquirer
    .prompt([
      {
        name: "choices",
        type: "list",
        message: "Please select an option:",
        choices: [
          "View All Employees",
          "View All Roles",
          "View All Departments",
          "View All Employees By Department",
          "View Department Budgets",
          "Update Employee Role",
          "Update Employee Manager",
          "Add Employee",
          "Add Role",
          "Add Department",
          "Remove Employee",
          "Remove Role",
          "Remove Department",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      const { choices } = answers;

      if (choices === "View All Employees") {
        viewAllEmployees();
      }

      if (choices === "View All Departments") {
        viewAllDepartments();
      }

      if (choices === "View All Employees By Department") {
        viewEmployeesByDepartment();
      }

      if (choices === "Add Employee") {
        addEmployee();
      }

      if (choices === "Remove Employee") {
        removeEmployee();
      }

      if (choices === "Update Employee Role") {
        updateEmployeeRole();
      }

      if (choices === "Update Employee Manager") {
        updateEmployeeManager();
      }

      if (choices === "View All Roles") {
        viewAllRoles();
      }

      if (choices === "Add Role") {
        addRole();
      }

      if (choices === "Remove Role") {
        removeRole();
      }

      if (choices === "Add Department") {
        addDepartment();
      }

      if (choices === "View Department Budgets") {
        viewDepartmentBudget();
      }

      if (choices === "Remove Department") {
        removeDepartment();
      }

      if (choices === "Exit") {
        connection.end();
      }
    });
};

// View All Employees
const viewAllEmployees = () => {
  let sql = `SELECT employee.id, 
                  employee.first_name, 
                  employee.last_name, 
                  role.title, 
                  department.department_name AS 'department', 
                  role.salary
                  FROM employee, role, department 
                  WHERE department.id = role.department_id 
                  AND role.id = employee.role_id
                  ORDER BY employee.id ASC`;
  connection.promise().query(sql, (error, response) => {
    if (error) throw error;
    console.log(
      chalk.yellow.bold(
        `====================================================================================`
      )
    );
    console.log(
      `                              ` + chalk.green.bold(`Current Employees:`)
    );
    console.log(
      chalk.yellow.bold(
        `====================================================================================`
      )
    );
    console.table(response);
    console.log(
      chalk.yellow.bold(
        `====================================================================================`
      )
    );
    promptUser();
  });
};
