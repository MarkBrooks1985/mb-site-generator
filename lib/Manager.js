const inquirer = require("inquirer");
const Employee = require("./Employee");

// defines the manager class and constructor elements

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // gets the managers role

  getRole() {
    return "Manager";
  }

  // gets the managers office number

  getOfficeNumber() {
    return this.officeNumber;
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
        <strong>Office Number:</strong> ${this.officeNumber}
        </div>
    </div>
    </div>
</div>`;
  }
}

module.exports = Manager;
