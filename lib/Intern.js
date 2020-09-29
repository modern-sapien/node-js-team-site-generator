// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee.js")

class Intern extends Employee {
        constructor(name, id, email, school) { 
        super(name, id, email) 
        this.school = school;
        }
        getRole()   {
            return "Intern";
        }
        getSchool()    {
            return this.school;
        }
};

const e = new Intern("Foo", 1, "test@test.com", "UCLA");

e.getRole();

e.getSchool();

// function createIntern() {
//     inquirer.prompt(questions).then((response)  => {
//         console.log(response)
//     }).catch((err)  => {
//         console.log(err)
//     })
// }

async function createIntern() {
    const res = await   inquirer.prompt(questions);
    return new Intern(res.name, res.id, res.email, res.school);
}

const questions = [
    {name: "name",
     type: "input",
     message: `What is the name of the Intern?`
    },
    {name: "id",
    type: "input",
    message: `What is the ID of the Intern?`
    },
    {name: "email",
    type: "input",
    message: `What is the email of the Intern?`
    },
    {name: "school",
    type: "input",
    message: `What school does the Intern go to?`
    },
]

module.exports =  {Intern, createIntern}