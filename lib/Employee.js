// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, role)  {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

}

const e = new Employee("Alice", 100, "test@testmail.com", "Employee");



module.exports =  Employee
