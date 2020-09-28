// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, role)  {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(){
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail()  {
        return this.email;
    }
}

const e = new Employee("Alice", 100, "test@testmail.com", "Employee");

e.getName(Employee);
e.getId(Employee);
e.getEmail(Employee)

module.exports =  Employee
