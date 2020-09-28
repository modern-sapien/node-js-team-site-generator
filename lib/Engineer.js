// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee.js")

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

const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");

e.getRole();

e.getGithub();

function createEngineer() {
    inquirer.prompt(questions).then((response)  => {
        console.log(response)
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
    {name: "gitHub",
    type: "input",
    message: `What is the github username of the Engineer?`
    },
]


module.exports =  {Engineer, createEngineer}
