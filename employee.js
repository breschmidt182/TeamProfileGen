// const employee = require('./test/employee.test');
// const manager = require('./test/manager.test');
// const engineer = require('./test/engineer.test');
// const intern = require('./test/intern.test');

class Employee {
    constructor(name,id,email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    if (name = undefined || id == undefined || email== undefined || role == undefined) {
        throw new Error('Name, email, and role need to be provided')
    }

    getName() {
        return this.name;
    }  
    getId() {
        if (this.id <= 0) {
            throw new Error("ID must be greater than 0")
        }
       return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, GitHubUserName, role) {
        super(name, id, email);
        this.github = GitHubUserName;
        this.role = role;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'intern';
    }
}

module.exports = {Employee, Manager, Engineer, Intern};

