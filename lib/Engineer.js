// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee.js")
const teamMembers = require("../app.js");

class Engineer extends Employee {
        constructor(name, id, email, github) { 
        super(name, id, email) 
        this.github = github;
        }
        getRole()   {
            return "Engineer";
        }
        getGithub()    {
            return this.github;
        }
};

// const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");

// e.getRole();

// e.getGithub();



function createEngineer() {
    inquirer.prompt(questions).then((res)  => {
        let engineer = new Engineer(res.name, res.id, res.email, res.github);
        console.log(engineer)
        teamMembers.push(engineer)
        console.log(teamMembers)
    }).catch((err)  => {
        console.log(err)
    })
}

const questions = [
    {name: "name",
     type: "input",
     message: `What is the name of the Engineer?`
    },
    {name: "id",
    type: "input",
    message: `What is the ID of the Engineer?`
    },
    {name: "email",
    type: "input",
    message: `What is the email of the Engineer?`
    },
    {name: "github",
    type: "input",
    message: `What is the github username of the Engineer?`
    },
]


module.exports =  {Engineer, createEngineer}
