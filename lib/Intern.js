const inquirer = require("inquirer");
const Employee = require("./Employee");

// defines the intern class and constructor elements

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // gets the interns role

  getRole() {
    return "Intern";
  }

  // gets the interns school

  getSchool() {
    return this.school;
  }

  // gets the card element and sends it to the markdown

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
        <strong>School:</strong> ${this.school}
        </div>
    </div>
    </div>
</div>`;
  }
}

module.exports = Intern;
