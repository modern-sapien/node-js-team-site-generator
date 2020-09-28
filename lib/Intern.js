// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
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

module.exports =  Intern