const inquirer = require("inquirer");

// defines the employee class and constructor elements

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // gets the employees name

  getName() {
    return this.name;
  }

  // gets the employees id

  getId() {
    return this.id;
  }

  // gets the employees email

  getEmail() {
    return this.email;
  }

  // gets the employees role

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
