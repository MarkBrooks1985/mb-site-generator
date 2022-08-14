const inquirer = require("inquirer");
const Employee = require("./Employee");

// defines the engineer class and constructor elements

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // gets the engineers role

  getRole() {
    return "Engineer";
  }

  // gets the engineer github

  getGithub() {
    return this.github;
  }

  // compiles the card element in the markdown

  toString() {
    return `<div class="col-12 col-sm-6 col-md-4 col-lg-2">
    <div class="card">
        <div class="card-header bg-info text-white">
        <strong>Name:</strong> ${this.name}
        </div>
        <div class="card-body">
            <div>
            <strong>ID:</strong> ${this.id}
        </div>
        <div>
        <strong>Position:</strong> ${this.getRole()}
        </div>
        <div>
        <strong>Email:</strong> ${this.email}
        </div>
        <div>
        <strong>Github:</strong> ${this.github}
        </div>
    </div>
    </div>
</div>`;
  }
}

module.exports = Engineer;
