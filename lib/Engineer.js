// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")

class Engineer extends Employee {
        constructor(name, id, email, github) { 
        super(name, id, email) 
        this.github = github;
        }
        getRole()   {
            return "Engineer"
        }
        getGitHub()    {
            return this.github
        }
};

const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");

e.getRole(Engineer);

e.getGitHub(Engineer)

module.exports =  Engineer
