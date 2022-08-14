const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/generateHtml");
const fs = require("fs");
const { inherits } = require("util");

const teamMembers = [];

// defines the manager questions

const managerQuestions = [
  {
    type: "input",
    message: "What is the managers name",
    name: "manager",
  },

  {
    type: "input",
    message: "What is the managers id",
    name: "managerid",
  },

  {
    type: "input",
    message: "What is the managers email",
    name: "manageremail",
  },

  {
    type: "input",
    message: "What is the managers office number",
    name: "officenumber",
  },
];

// defines the engineer questions

const questionsEngineer = [
  {
    type: "input",
    message: "What is the engineers name",
    name: "engineer",
  },

  {
    type: "input",
    message: "What is the engineers id",
    name: "engineerid",
  },

  {
    type: "input",
    message: "What is the engineers email",
    name: "engineeremail",
  },

  {
    type: "input",
    message: "What is the engineers github",
    name: "engineergithub",
  },
];

// defines the intern questions

const questionsIntern = [
  {
    type: "input",
    message: "What is the Interns name",
    name: "intern",
  },

  {
    type: "input",
    message: "What is the interns id",
    name: "internid",
  },

  {
    type: "input",
    message: "What is the interns email",
    name: "internemail",
  },

  {
    type: "input",
    message: "What is the interns school",
    name: "internschool",
  },
];

// creates the manager

function createManager() {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.manager,
      response.managerid,
      response.manageremail,
      response.officenumber
    );
    teamMembers.push(manager);
    buildTeam();
  });
}

// builds the team

function buildTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "which type of team member would you like to add",
        name: "teammember",
        choices: ["Engineer", "Intern", "Exit"],
      },
    ])
    .then((response) => {
      const memberType = response.teammember;
      switch (memberType) {
        case "Engineer":
          addNewEngineer();
          break;
        case "Intern":
          addNewIntern();
          break;
        case "Exit":
          buildHtml();
          break;
      }
    });
}

// adds a new engineer

function addNewEngineer() {
  inquirer.prompt(questionsEngineer).then((response) => {
    const engineer = new Engineer(
      response.engineer,
      response.engineerid,
      response.engineeremail,
      response.engineergithub
    );
    teamMembers.push(engineer);
    buildTeam();
  });
}

// adds a new intern

function addNewIntern() {
  inquirer.prompt(questionsIntern).then((response) => {
    const intern = new Intern(
      response.intern,
      response.internid,
      response.internemail,
      response.internschool
    );
    teamMembers.push(intern);
    buildTeam();
  });
}

// builds the markdown

function buildHtml() {
  let htmlBody = generateHtml(teamMembers);
  writeToFile("./dist/index.html", htmlBody);
}
