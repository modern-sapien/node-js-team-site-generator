// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee.js");
const App = require("../app.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

const e = new Engineer("Foo", 1, "test@test.com", "testValue")
e.getGithub();

async function createEngineer() {
    const res = await   inquirer.prompt(questions);
    return new Engineer(res.name, res.id, res.email, res.github);
}

// const engineer ={
//   return inquirer
//     .prompt(questions)
//     .then((res) => {
//       let eng = new Engineer(res.name, res.id, res.email, res.github);
//       console.log("robot noise one");
//       return eng;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }

const questions = [
  { name: "name", type: "input", message: `What is the name of the Engineer?` },
  { name: "id", type: "input", message: `What is the ID of the Engineer?` },
  {
    name: "email",
    type: "input",
    message: `What is the email of the Engineer?`,
  },
  {
    name: "github",
    type: "input",
    message: `What is the github username of the Engineer?`,
  },
];

module.exports =  {Engineer, createEngineer};