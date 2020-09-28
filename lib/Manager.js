// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee.js")

class Manager extends Employee {
        constructor(name, id, email, officeNumber) { 
        super(name, id, email) 
        this.officeNumber = officeNumber;
        }
        getRole()   {
            return "Manager";
        }
        getOfficeNumber()    {
            return this.officeNumber;
        }
        
};

const e = new Manager("Foo", 1, "test@test.com", 100);

e.getRole();

e.getOfficeNumber();




function createManager() {
    inquirer.prompt(questions).then((response)  => {
        console.log(response)
    }).catch((err)  => {
        console.log(err)
    })

}

const questions = [
    {name: "name",
     type: "input",
     message: `What is the name of the Manager?`
    },
    {name: "id",
    type: "input",
    message: `What is the ID of the Manager?`
    },
    {name: "email",
    type: "input",
    message: `What is the email of the Manager?`
    },
    {name: "officeNumber",
    type: "input",
    message: `What is the office number of the Manager?`
    },
]


module.exports =  {Manager, createManager}
